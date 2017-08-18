import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import MealAdderModal from './MealAdderModal';

export default class MealAdder extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.view}
          onPress={() => this.setState({ isOpen: true })}
        >
          <Text style={styles.text}>Ajouter un repas</Text>
        </TouchableOpacity>
        <MealAdderModal
          isOpen={isOpen}
          closeModal={() => this.setState({ isOpen: false })}
          addMeal={() => this.setState({ isOpen: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 30,
  },
});

MealAdder.propTypes = {};
