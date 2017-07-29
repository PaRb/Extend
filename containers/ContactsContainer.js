import React, { Component } from "react";
import { Text } from "react-native";

import ContactsView from "../views/ContactsView.js";

const dummyContacts = [
  {
    email: "pierangelooo@gmail.com",
    firstName: "Pierangelo",
    lastName: "Rothenbühler",
    meal: "#11",
    id: 1,
  },
  {
    email: "florian.bienefelt@gmail.com",
    firstName: "Florian",
    lastName: "Bienefelt",
    meal: "#10",
    id: 2,
  },
  {
    email: "constace.legay@gmail.com",
    firstName: "",
    lastName: "",
    meal: "",
    id: 3,
  },
  {
    email: "pierangelooo@gmail.com",
    firstName: "Pierangelo",
    lastName: "Rothenbühler",
    meal: "#11",
    id: 4,
  },
  {
    email: "florian.bienefelt@gmail.com",
    firstName: "Florian",
    lastName: "Bienefelt",
    meal: "#10",
    id: 5,
  },
  {
    email: "constance.legay@gmail.com",
    firstName: "",
    lastName: "",
    meal: "",
    id: 6,
  },
];

export default class ContactsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    // TODO: Add API code here
    this.setState({ contacts: dummyContacts });
  }

  render() {
    return this.state.contacts.length > 0
      ? <ContactsView contacts={this.state.contacts} />
      : <Text>Loading...</Text>;
    // add prop to refresh contacts (fetchContacts) when pull down to refresh
  }
}
