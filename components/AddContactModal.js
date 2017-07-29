import React from "react";
import PropTypes from "prop-types";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddContactForm from "./AddContactForm.js";

const AddContactModal = ({ isModalVisible, closeModal }) =>
  <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={closeModal}
  >
    <View style={styles.modalView}>
      <View style={styles.formView}>
        <AddContactForm myStyle={styles.addContactForm} />
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={() => {
            //TODO : add API code here
            console.log("Hello!");
          }}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}> Add </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
          <Text style={styles.buttonText}> Cancel </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>;

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddContactModal;

const styles = StyleSheet.create({
  modalView: {
    padding: 10,
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  formView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  buttonsView: {
    flex: 1,
    flexDirection: "row",
    height: "50%",
  },
  addContactForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontSize: 24,
  },
  addButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  cancelButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 24,
  },
});
