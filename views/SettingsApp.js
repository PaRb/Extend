import { StackNavigator } from 'react-navigation';

import StackViews from './StackViews';

const SettingsApp = StackNavigator({
  SettingsView: StackViews.SettingsView,
});

export default SettingsApp;
