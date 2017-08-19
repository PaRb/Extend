import { StackNavigator } from 'react-navigation';

import stacks from './StackViews';

const ContactsApp = StackNavigator({
  ContactsView: stacks.ContactsView,
  SingleContactView: stacks.SingleContactView,
  SingleEventView: stacks.SingleEventView,
});

export default ContactsApp;
