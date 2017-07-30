import queryString from 'query-string';
import key from '../mailchimp-key.js';
import Base64 from './Base64';

const MAIN_LIST_ID = '2530fc93d7';
const MEAL_GROUPS_ID = 'aa093740d5';

const baseURL = 'https://us15.api.mailchimp.com/3.0';

const generateRequest = (path, method = 'GET', query, body = undefined) => {
  let fullPath = baseURL + path;
  if (query) {
    const stringifiedQuery = queryString.stringify(query);
    fullPath += '?' + stringifiedQuery;
  }

  let bodyJSON;
  if (body) {
    bodyJSON = JSON.stringify(body);
  }

  return fetch(fullPath, {
    mode: 'no-cors',
    method,
    headers,
    body: bodyJSON,
  })
    .then(parseBody)
    .catch(e => console.log('error: ', e));
};

const prettyUser = rawData => ({
  id: rawData.id,
  email: rawData.email_address,
  firstName: rawData.merge_fields.FNAME,
  lastName: rawData.merge_fields.LNAME,
});

const parseBody = json => JSON.parse(json._bodyInit);

const getAuth = () => {
  let authenticationString = Base64.btoa('florian.bienefelt:' + key);
  authenticationString = 'Basic ' + authenticationString;
  return authenticationString;
};

const headers = {
  authorization: getAuth(),
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAllContacts = () => {
  return generateRequest('/lists/' + MAIN_LIST_ID + '/members', 'GET', {
    count: 100,
    fields: 'members.email_address,members.id,members.merge_fields',
  }).then(result => result.members.map(prettyUser));
};

export const getContactById = contactId =>
  generateRequest('/lists/' + MAIN_LIST_ID + '/members/' + contactId).then(
    prettyUser,
  );

export const getContactByEmail = email =>
  generateRequest('/search-members', 'GET', {
    query: email,
  })
    .then(result => result.exact_matches.members[0])
    .then(prettyUser);

export const getMealGroups = () =>
  generateRequest(
    '/lists/' +
      MAIN_LIST_ID +
      '/interest-categories/' +
      MEAL_GROUPS_ID +
      '/interests',
    'GET',
    {
      count: 100,
    },
  ).then(result =>
    result.interests.map(meal => ({
      id: meal.id,
      name: meal.name,
      subCount: meal.subscriber_count,
    })),
  );

export const toggleContactToMeal = (contactId, mealNo, nextValue = true) =>
  getMealGroups()
    .then(result => result.find(meal => meal.name === '#' + mealNo))
    .then(meal =>
      generateRequest(
        '/lists/' + MAIN_LIST_ID + '/members/' + contactId,
        'PATCH',
        undefined,
        {
          interests: { [meal.id]: nextValue },
        },
      ),
    );

export const addContact = contact =>
  generateRequest('/lists/' + MAIN_LIST_ID + '/members', 'POST', undefined, {
    email_address: contact.email,
    status: 'subscribed',
    merge_fields: {
      FNAME: contact.firstName,
      LNAME: contact.lastName,
    },
  }).then(prettyUser);

export const modifyContact = (contactId, newContact) =>
  generateRequest(
    '/lists/' + MAIN_LIST_ID + '/members/' + contactId,
    'PATCH',
    undefined,
    {
      email_address: newContact.email,
      merge_fields: {
        FNAME: newContact.firstName,
        LNAME: newContact.lastName,
      },
    },
  ).then(prettyUser);
