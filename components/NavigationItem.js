import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const NavigationItem = ({ handlePress, children, height }) => {
  return (
    <TouchableOpacity
      style={height ? [styles.root, { height }] : styles.root}
      onPress={handlePress}
    >
      <View style={styles.text}>
        {children}
      </View>
      <Ionicons
        name="ios-arrow-forward"
        size={32}
        style={styles.icon}
        color={colors.lightGrey}
      />
    </TouchableOpacity>
  );
};

NavigationItem.propTypes = {};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    margin: 8,
    marginBottom: 0,
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
});

export default NavigationItem;
