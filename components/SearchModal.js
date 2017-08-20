import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Modal, StyleSheet, TextInput } from "react-native";

import Button from "./Button";

export default class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, search: "" };
  }

  componentWillReceiveProps({ showModal }) {
    if (showModal !== this.props.showModal) {
      this.setState({ isOpen: showModal });

      if (showModal) {
        // Make sure the textinput is up to date with the parent
        this.setState({ search: this.props.currentSearch });
      }
    }
  }

  handleChange = search => this.setState({ search });

  handleSearch = () => {
    this.props.setSearch(this.state.search);
    this.closeModal();
  };

  closeModal = () => {
    this.props.setParams({ showModal: false });
  };

  render() {
    const { isOpen, search } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={this.closeModal}
      >
        <View style={styles.root}>
          <View style={styles.modal}>
            <Text style={styles.title}>Chercher</Text>
            <TextInput
              value={search}
              onChangeText={this.handleChange}
              onSubmitEditing={this.handleSearch}
              style={styles.input}
              placeholder="Recherche..."
              autoFocus
              returnKeyType="search"
              clearButtonMode="always"
            />
            <View style={styles.buttons}>
              <Button handlePress={this.closeModal} label="Cancel" />
              <Button handlePress={this.handleSearch} label="Search" />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

SearchModal.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setParams: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    paddingTop: 16,
    flex: 0,
    backgroundColor: "white",
    height: "40%",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    padding: 16,
  },
  input: {
    margin: 16,
    padding: 16,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "grey",
  },
  buttons: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
