import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

export default class SingleContactView extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello {this.props.navigation.state.params.id}!
        </Text>
      </View>
    );
  }
}

SingleContactView.propTypes = {};
