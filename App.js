import React from "react";
import { StackNavigator } from "react-navigation";

import ContactsView from "./containers/ContactsContainer.js";

const App = StackNavigator({
  Contacts: { screen: ContactsView },
});

export default App;
