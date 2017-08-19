import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

export default class Button extends Component {
  render() {
    const { label, handlePress } = this.props;
    return (
      <TouchableOpacity onPress={handlePress} style={styles.root}>
        <Text style={styles.label}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {};

const styles = StyleSheet.create({
  root: {
    flex: 0,
    minHeight: 40,
    minWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  label: {
    fontSize: 24,
  },
});
