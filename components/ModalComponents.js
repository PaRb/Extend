import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import AddContactForm from './AddContactForm.js';
import { addContact } from '../api/contacts';

export default class ModalComponents extends Component {
  render() {
    const { email, setEmail, closeModal, navigate } = this.props;

    return (
      <View style={styles.modalView}>
        <View style={styles.formView}>
          <AddContactForm
            myStyle={styles.addContactForm}
            setEmail={setEmail}
            email={email}
          />
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            onPress={() => {
              addContact({ email })
                .then(result => {
                  closeModal();
                  setEmail('');
                  return result;
                })
                .then(result => {
                  navigate('SingleContactView', { ...result });
                });
            }}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}> Add </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              closeModal();
              setEmail('');
            }}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}> Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    padding: 10,
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  formView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    height: '50%',
  },
  addContactForm: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: 24,
  },
  addButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  cancelButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 24,
  },
});

ModalComponents.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
