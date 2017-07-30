import React, { Component } from 'react';
import { Text } from 'react-native';

import ContactsView from '../views/ContactsView.js';
import { getAllContacts, addContactToMeal } from '../api-v2/contacts';

export default class ContactsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    getAllContacts().then(result => this.setState({ contacts: result }));
  }

  render() {
    return this.state.contacts.length > 0
      ? <ContactsView contacts={this.state.contacts} {...this.props} />
      : <Text>Loading...</Text>;
    // add prop to refresh contacts (fetchContacts) when pull down to refresh
  }
}
