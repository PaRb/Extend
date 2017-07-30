import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AddContactForm from './AddContactForm.js';
import { addContact } from '../api-v2/contacts';

export default class AddContactModal extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '' };
  }

  setEmail = value => {
    this.setState({ email: value });
  };

  render() {
    const { isModalVisible, closeModal, navigate } = this.props;
    const { email } = this.state;
    console.log(email);

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          <View style={styles.formView}>
            <AddContactForm
              myStyle={styles.addContactForm}
              setEmail={this.setEmail}
              email={email}
            />
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity
              onPress={() => {
                addContact({ email })
                  .then(result => {
                    closeModal();
                    return result;
                  })
                  .then(result => {
                    console.log('heheh');
                    console.log(result);
                    navigate('SingleContactView', { id: result.id });
                  });
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
      </Modal>
    );
  }
}

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

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
