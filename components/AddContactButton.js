import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const AddContactButton = ({ handlePress }) =>
  <TouchableOpacity style={styles.addContactButton} onPress={handlePress}>
    <Text style={styles.addContactButtonText}>+</Text>
  </TouchableOpacity>;

export default AddContactButton;

const styles = StyleSheet.create({
  addContactButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 64,
    height: 64,
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  addContactButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
