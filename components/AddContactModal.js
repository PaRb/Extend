import React from "react";
import PropTypes from "prop-types";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddContactForm from "./AddContactForm.js";

const AddContactModal = ({ isModalVisible, closeModal }) =>
  <Modal
    animationType="slide"
    transparent={false}
    visible={isModalVisible}
    onRequestClose={closeModal}
  >
    <View>
      <AddContactForm />
      <TouchableOpacity
        onPress={() => {
          console.log("Hello!");
        }}
      >
        <Text> Add </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeModal}>
        <Text> Cancel </Text>
      </TouchableOpacity>
    </View>
  </Modal>;

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddContactModal;

const styles = StyleSheet.create(
  {
    // addButton: {},
    // cancelButton: {},
  },
);
