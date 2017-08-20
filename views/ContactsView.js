import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AddContactButton from '../components/AddContactButton.js';
import ContactList from '../components/ContactList.js';
import AddContactModal from '../components/AddContactModal.js';
import SearchModal from '../components/SearchModal.js';

export default class ContactsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };
  }

  showModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });

  setSearch = search => {
    this.setState({ search });
  };

  getContacts = () => {
    const { search } = this.state;
    const { contacts } = this.props;

    if (!search) {
      return contacts;
    } else {
      // TODO: implement search logic
      return contacts;
    }
  };

  render() {
    const { refreshing, handleRefresh } = this.props;
    const { navigation } = this.props;
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
          isModalVisible={this.state.isModalVisible}
          closeModal={this.closeModal}
        />
        <SearchModal
          showModal={!!(params && params.showModal)}
          setParams={setParams}
          setSearch={this.setSearch}
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
