import React from "react";
import { StackNavigator } from "react-navigation";

import ContactsView from "./containers/ContactsContainer.js";
import SingleContactView from "./views/SingleContactView.js";

const App = StackNavigator({
  ContactsView: { screen: ContactsView },
  SingleContactView: { screen: SingleContactView },
});

export default App;
