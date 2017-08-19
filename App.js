import { TabNavigator } from 'react-navigation';

import ContactsApp from './views/ContactsApp';
import EventsApp from './views/EventsApp';
import SettingsApp from './views/SettingsApp';
import colors from './config/colors';

const App = TabNavigator(
  {
    Contacts: { screen: ContactsApp },
    Events: { screen: EventsApp },
    Settings: { screen: SettingsApp },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: colors.primary,
    },
  },
);

export default App;
