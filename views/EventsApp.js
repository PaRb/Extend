import { StackNavigator } from 'react-navigation';

import EventsContainer from '../containers/EventsContainer';

const EventsApp = StackNavigator({
  EventsView: {
    screen: EventsContainer,
    navigationOptions: {
      title: 'Events',
    },
  },
});

export default EventsApp;
