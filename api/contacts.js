import {
  prettyUser,
  generateRequest,
  MAIN_LIST_ID,
  MEAL_GROUPS_ID,
} from './apiHelpers.js';

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
