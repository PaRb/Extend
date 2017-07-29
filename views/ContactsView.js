import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddContactButton from "../components/AddContactButton.js";
import ContactList from "../components/ContactList.js";

export default class ContactsView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactList contacts={this.props.contacts} />
        <AddContactButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
