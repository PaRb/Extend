import { StackNavigator } from 'react-navigation';

import ContactsContainer from '../containers/ContactsContainer';
import SingleContactContainer from '../containers/SingleContactContainer';

const ContactsApp = StackNavigator({
  ContactsView: {
    screen: ContactsContainer,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  SingleContactView: {
    screen: SingleContactContainer,
    navigationOptions: ({ navigation }) => ({
      title: "Quelqu'un",
    }),
  },
});

export default ContactsApp;
