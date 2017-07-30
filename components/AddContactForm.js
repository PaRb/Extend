import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

export default class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <TextInput
        style={this.props.myStyle}
        placeholder="Add email address"
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}

AddContactForm.propTypes = {};
