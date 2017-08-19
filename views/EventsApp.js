import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import stacks from './StackViews';

const EventsApp = StackNavigator({
  EventsView: stacks.EventsView,
  SingleEventView: stacks.SingleEventView,
  SingleContactView: stacks.SingleContactView,
});

export default EventsApp;
