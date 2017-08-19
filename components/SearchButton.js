import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class SearchButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.handlePress} style={styles.root}>
        <FontAwesome name="search" size={24} color="white" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingRight: 16,
  },
});

SearchButton.propTypes = {};
