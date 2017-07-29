import Mailchimp from 'mailchimp-api-v3';
import key from '../mailchimp-key.js';

const mailchimp = new Mailchimp(key);

const MAIN_LIST_ID = '2530fc93d7';
const MEAL_GROUPS_ID = 'aa093740d5';

const prettyUser = rawData => ({
  id: rawData.id,
  email: rawData.email_address,
  firstName: rawData.merge_fields.FNAME,
  lastName: rawData.merge_fields.LNAME,
});

export const getAllContacts = () =>
  mailchimp
    .get('/lists/' + MAIN_LIST_ID + '/members', {
      fields: 'members.email_address,members.id,members.merge_fields',
      count: 10000,
    })
    .then(response => response.members.map(prettyUser));

export const getContactById = contactId =>
  mailchimp
    .get('/lists/' + MAIN_LIST_ID + '/members/' + contactId)
    .then(prettyUser);

export const getContactByEmail = email =>
  mailchimp
    .get('/search-members', {
      query: email,
    })
    .then(result => result.exact_matches.members[0])
    .then(prettyUser);

export const getMealGroups = () =>
  mailchimp
    .get(
      '/lists/' +
        MAIN_LIST_ID +
        '/interest-categories/' +
        MEAL_GROUPS_ID +
        '/interests',
      {
        count: 100,
      },
    )
    .then(result =>
      result.interests.map(meal => ({
        id: meal.id,
        name: meal.name,
        subCount: meal.subscriber_count,
      })),
    );

export const addContactToMeal = (contactId, mealNo) =>
  getMealGroups()
    .then(result => result.find(meal => meal.name === '#' + mealNo))
    .then(meal =>
      mailchimp.patch('/lists/' + MAIN_LIST_ID + '/members/' + contactId, {
        interests: { [meal.id]: true },
      }),
    );

export const removeContactFromMeal = (contactId, mealNo) =>
  getMealGroups()
    .then(result => result.find(meal => meal.name === '#' + mealNo))
    .then(meal =>
      mailchimp.patch('/lists/' + MAIN_LIST_ID + '/members/' + contactId, {
        interests: { [meal.id]: false },
      }),
    );

/**
 * addContact - Adds a contact to the main list
 *
 * @param {Object} contact An object with fields `email`, `firstName`, and `lastName`
 *`email` field is mandatory
 * @return {Promise} The returned user, with his id
 */
export const addContact = contact =>
  mailchimp
    .post('/lists/' + MAIN_LIST_ID + '/members', {
      email_address: contact.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: contact.firstName,
        LNAME: contact.lastName,
      },
    })
    .then(prettyUser);

export const modifyContact = (contactId, newContact) =>
  mailchimp.patch('/lists/' + MAIN_LIST_ID + '/members/' + contactId, {
    email_address: newContact.email,
    merge_fields: {
      FNAME: newContact.firstName,
      LNAME: newContact.lastName,
    },
  });
