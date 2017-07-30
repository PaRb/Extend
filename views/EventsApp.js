import { StackNavigator } from 'react-navigation';

import EventsContainer from '../containers/EventsContainer';
import SingleEventContainer from '../containers/SingleEventContainer';

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
});

export default EventsApp;
