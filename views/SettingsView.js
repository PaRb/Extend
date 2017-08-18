import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MealAdder from '../components/MealAdder';

const SettingsView = props =>
  <View style={styles.container}>
    <MealAdder {...this.props} />
  </View>;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});

export default SettingsView;
