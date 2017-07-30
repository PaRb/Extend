import { TabNavigator } from 'react-navigation';

import ContactsApp from './views/ContactsApp';
import EventsApp from './views/EventsApp';

const App = TabNavigator(
  {
    Contacts: { screen: ContactsApp },
    Events: { screen: EventsApp },
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
