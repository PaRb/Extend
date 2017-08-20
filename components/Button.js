import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

export default class Button extends Component {
  render() {
    const { label, handlePress, primary } = this.props;
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={primary ? [styles.root, styles.rootPrimary] : styles.root}
      >
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
    minHeight: 24,
    minWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    padding: 8,
    margin: 8,
  },
  rootPrimary: {
    borderColor: colors.primary,
  },
  label: {
    fontSize: 24,
  },
});
