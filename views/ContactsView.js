import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AddContactButton from '../components/AddContactButton.js';
import ContactList from '../components/ContactList.js';
import AddContactModal from '../components/AddContactModal.js';
import SearchModal from '../components/SearchModal.js';

export default class ContactsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false, search: '' };
  }

  showModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });

  setSearch = search => this.setState({ search });

  getContacts = () => {
    const { search } = this.state;
    const { contacts } = this.props;

    if (!search) {
      return contacts;
    } else {
      return contacts.filter(
        ({ firstName, lastName, email }) =>
          firstName.indexOf(search) >= 0 ||
          lastName.indexOf(search) >= 0 ||
          email.indexOf(search) >= 0,
      );
    }
  };

  render() {
    const { search, isModalVisible } = this.state;
    const { refreshing, handleRefresh, navigation } = this.props;
    const { state, setParams, navigate } = navigation;
    const { params } = state;

    return (
      <View style={styles.container}>
        <ContactList
          contacts={this.getContacts()}
          navigate={navigate}
          refreshing={refreshing}
          handleRefresh={handleRefresh}
        />
        <AddContactButton handlePress={this.showModal} />
        <AddContactModal
          navigate={navigate}
          isModalVisible={isModalVisible}
          closeModal={this.closeModal}
        />
        <SearchModal
          showModal={!!(params && params.showModal)}
          setParams={setParams}
          setSearch={this.setSearch}
          currentSearch={search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
