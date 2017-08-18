import { StackNavigator } from 'react-navigation';

import ContactsContainer from '../containers/ContactsContainer';
import SingleContactContainer from '../containers/SingleContactContainer';
import SingleEventContainer from '../containers/SingleEventContainer';

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
  SingleEventView: {
    screen: SingleEventContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Repas ' + navigation.state.params.name,
    }),
  },
});

export default ContactsApp;
