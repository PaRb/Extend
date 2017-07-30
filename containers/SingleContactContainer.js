import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import SingleContactView from "../views/SingleContactView.js";

const dummyContact = {
  email: "pierangelooo@gmail.com",
  firstName: "Pierangelo",
  lastName: "Rothenbühler",
  meal: "#11",
  id: 1,
};

export default class SingleContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetail: {},
    };
  }

  componentDidMount() {
    // TODO: Add API code here: get contact from mailchimp based on ID passed as props
    this.setState({ contactDetail: dummyContact });
  }

  render() {
    return Object.keys(this.state.contactDetail).length > 0
      ? <SingleContactView
          contactDetail={this.state.contactDetail}
          {...this.props}
        />
      : <Text>Loading...</Text>;
  }
}

SingleContactContainer.propTypes = {};
