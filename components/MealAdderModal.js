import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { getMealGroups, addMeal } from '../api/contacts';

import Loading from './Loading';
import Button from './Button';

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
            {lastMeal
              ? <Text style={styles.info}>
                  {'Ceci créera le repas #' + (lastMeal + 1)}
                </Text>
              : <Loading />}
            <View style={styles.buttons}>
              <Button handlePress={closeModal} label="Annuler" />
              <Button handlePress={this.addMeal} label="Go" primary />
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
    padding: 10,
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
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
