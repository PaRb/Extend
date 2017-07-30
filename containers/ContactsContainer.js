import React, { Component } from 'react';
import { Text } from 'react-native';

import ContactsView from '../views/ContactsView.js';
import { getAllContacts } from '../api/contacts';

export default class ContactsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    console.log('hello');
    this.setState({ refreshing: true }, () =>
      getAllContacts().then(result =>
        this.setState({ contacts: result, refreshing: false }),
      ),
    );
  };

  render() {
    const { refreshing, contacts } = this.state;
    return contacts.length > 0
      ? <ContactsView
          contacts={contacts}
          {...this.props}
          refreshing={refreshing}
          handleRefresh={this.refresh}
        />
      : <Text>Loading...</Text>;
    // TODO: add prop to refresh contacts (fetchContacts) when pull down to refresh
  }
}
