import { TabNavigator } from 'react-navigation';

import ContactsApp from './views/ContactsApp';
import EventsApp from './views/EventsApp';
import SettingsApp from './views/SettingsApp';

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
      activeTintColor: '#e91e63',
    },
  },
);

export default App;
