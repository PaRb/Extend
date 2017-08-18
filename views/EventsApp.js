import { StackNavigator } from 'react-navigation';

import EventsContainer from '../containers/EventsContainer';
import SingleEventContainer from '../containers/SingleEventContainer';
import SingleContactContainer from '../containers/SingleContactContainer';

const EventsApp = StackNavigator({
  EventsView: {
    screen: EventsContainer,
    navigationOptions: {
      title: 'Events',
    },
  },
  SingleEventView: {
    screen: SingleEventContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Repas ' + navigation.state.params.name,
    }),
  },
  SingleContactView: {
    screen: SingleContactContainer,
    navigationOptions: ({ navigation }) => ({
      title: "Quelqu'un",
    }),
  },
});

export default EventsApp;
