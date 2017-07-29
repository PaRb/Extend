import Mailchimp from 'mailchimp-api-v3';
import key from '../mailchimp-key.js';

const mailchimp = new Mailchimp(key);

const MAIN_LIST_ID = '2530fc93d7';
const MEAL_GROUPS_ID = 'aa093740d5';

export const createCampaign = () => {
  // TODO
};

export const setTemplateToCampaign = (campaignId, templateId) => {
  // TODO
};

export const sendCampaignTest = campaignId => {
  // TODO
};

export const scheduleCampaign = date => {
  // TODO
};
