import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { getMealGroups, addMeal } from '../api/contacts';

export default class MealAdderModal extends Component {
  constructor(props) {
    super(props);

    this.state = { lastMeal: '' };
  }

  componentDidMount() {
    getMealGroups().then(meals => {
      const name = meals[meals.length - 1].name;
      this.setState({ lastMeal: parseInt(name.slice(1)) });
    });
  }

  addMeal = () => {
    addMeal('#' + (this.state.lastMeal + 1))
      .then(console.log)
      .catch(console.log);
    this.props.closeModal();
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { lastMeal } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.info}>
              {lastMeal
                ? 'Ceci créera le repas #' + (lastMeal + 1)
                : 'Loading...'}
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeModal}
              >
                <Text style={styles.cancelText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.acceptButton}
                onPress={this.addMeal}
              >
                <Text style={styles.cancelText}>Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    flex: 0,
    justifyContent: 'space-between',
  },
  info: {
    fontSize: 24,
    padding: 20,
  },
  buttons: {
    height: 100,
    flex: 0,
    flexDirection: 'row',
  },
  cancelButton: {
    padding: 20,
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
  },
  acceptButton: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 24,
    height: 40,
  },
});
