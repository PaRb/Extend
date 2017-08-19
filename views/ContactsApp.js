import { StackNavigator } from 'react-navigation';

import StackViews from './StackViews';

const ContactsApp = StackNavigator({
  ContactsView: StackViews.ContactsView,
  SingleContactView: StackViews.SingleContactView,
  SingleEventView: StackViews.SingleEventView,
});

export default ContactsApp;
