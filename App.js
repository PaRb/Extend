import React from "react";
import { StackNavigator } from "react-navigation";

import ContactsContainer from "./containers/ContactsContainer.js";
import SingleContactContainer from "./containers/SingleContactContainer.js";

const App = StackNavigator({
  ContactsView: { screen: ContactsContainer },
  SingleContactView: { screen: SingleContactContainer },
});

export default App;
