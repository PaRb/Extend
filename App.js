import React from 'react';
import { TabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

import ContactsApp from './views/ContactsApp';
import EventsApp from './views/EventsApp';
import SettingsApp from './views/SettingsApp';
import colors from './config/colors';

const App = TabNavigator(
  {
    Contacts: {
      screen: ContactsApp,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Ionicons name="ios-people" size={40} color={tintColor} />,
      },
    },
    Events: {
      screen: EventsApp,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Ionicons name="ios-wine" size={32} color={tintColor} />,
      },
    },
    Settings: {
      screen: SettingsApp,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Ionicons name="ios-settings" size={32} color={tintColor} />,
      },
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: colors.primary,
    },
    lazy: true,
  },
);

export default App;
