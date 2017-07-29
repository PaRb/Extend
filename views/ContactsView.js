import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AddContactButton from "../components/AddContactButton.js";
import ContactList from "../components/ContactList.js";
import AddContactModal from "../components/AddContactModal.js";

export default class ContactsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };
  }

  showModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <ContactList contacts={this.props.contacts} />
        <AddContactButton handlePress={this.showModal} />
        <AddContactModal
          isModalVisible={this.state.isModalVisible}
          closeModal={this.closeModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
