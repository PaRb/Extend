import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import colors from '../config/colors';

const Loading = ({ showText, fullScreen }) =>
  <View style={fullScreen ? [styles.root, styles.rootFullScreen] : styles.root}>
    <ActivityIndicator size="large" />
    <Text style={styles.text}>Loading...</Text>
  </View>;

const styles = StyleSheet.create({
  root: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  rootFullScreen: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    padding: 10,
  },
});

Loading.propTypes = {
  showText: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

Loading.defaultProps = {
  showText: true,
  fullScreen: true,
};

export default Loading;
