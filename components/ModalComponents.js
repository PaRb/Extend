import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import AddContactForm from "./AddContactForm";
import Button from "./Button";
import { addContact } from "../api/contacts";

export default class ModalComponents extends Component {
  render() {
    const { email, setEmail, closeModal, navigate } = this.props;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.formView}>
            <AddContactForm
              myStyle={styles.addContactForm}
              setEmail={setEmail}
              email={email}
            />
          </View>
          <View style={styles.buttonsView}>
            <Button
              handlePress={() => {
                closeModal();
                setEmail("");
              }}
              label="Cancel"
            />
            <Button
              handlePress={() => {
                addContact({ email })
                  .then(result => {
                    closeModal();
                    setEmail("");
                    return result;
                  })
                  .then(result => {
                    navigate("SingleContactView", { ...result });
                  });
              }}
              label="Add"
              primary
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    width: "100%",
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    padding: 10,
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "30%",
    borderRadius: 16,
  },
  formView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  buttonsView: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  addContactForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontSize: 24,
  },
});

ModalComponents.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
