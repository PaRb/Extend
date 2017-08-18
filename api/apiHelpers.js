import Base64 from './Base64';
import queryString from 'query-string';

import key from '../mailchimp-key.js';

export const MAIN_LIST_ID = '2530fc93d7';
export const MEAL_GROUPS_ID = 'aa093740d5';

const baseURL = 'https://us15.api.mailchimp.com/3.0';

export const generateRequest = (
  path,
  method = 'GET',
  query,
  body = undefined,
) => {
  let fullPath = baseURL + path;
  if (query) {
    const stringifiedQuery = queryString.stringify(query);
    fullPath += '?' + stringifiedQuery;
  }

  let bodyJSON;
  if (body) {
    bodyJSON = JSON.stringify(body);
  }
  console.log(fullPath);
  return fetch(fullPath, {
    mode: 'no-cors',
    method,
    headers,
    body: bodyJSON,
  })
    .then(parseBody)
    .catch(e => console.log('error: ', e));
};

export const prettyUser = rawData => ({
  ...rawData,
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
