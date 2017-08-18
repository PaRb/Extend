import { StackNavigator } from 'react-navigation';

import SettingsView from './SettingsView';

const SettingsApp = StackNavigator({
  ContactsView: {
    screen: SettingsView,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export default SettingsApp;
