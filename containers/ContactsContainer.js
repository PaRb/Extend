import React, { Component } from 'react';
import { Text } from 'react-native';

import Loading from '../components/Loading';
import { getAllContacts } from '../api/contacts';

const ContactsContainer = WrappedComponent =>
  class extends Component {
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
      this.setState({ refreshing: true }, () =>
        getAllContacts().then(result => {
          const sortedContacts = result.sort((a, b) => {
            const emailA = a.firstName.toLowerCase();
            const emailB = b.firstName.toLowerCase();
            if (emailA < emailB) return -1;
            if (emailA > emailB) return 1;
            return 0;
          });
          this.setState({
            contacts: sortedContacts,
            refreshing: false,
          });
        }),
      );
    };

    render() {
      const { refreshing, contacts } = this.state;
      return contacts.length > 0
        ? <WrappedComponent
            {...this.props}
            contacts={contacts}
            refreshing={refreshing}
            handleRefresh={this.refresh}
          />
        : <Loading />;
    }
  };

export default ContactsContainer;
