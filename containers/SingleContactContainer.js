import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import SingleContactView from '../views/SingleContactView.js';
import { getContactById } from '../api/contacts';

export default class SingleContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetail: {},
    };
  }

  componentDidMount() {
    this.fetchContact();
  }

  fetchContact = () => {
    const id = this.props.navigation.state.params.id;
    getContactById(id).then(result => this.setState({ contactDetail: result }));
  };

  render() {
    return Object.keys(this.state.contactDetail).length > 0
      ? <SingleContactView
          contactDetail={this.state.contactDetail}
          {...this.props}
          refreshContact={this.fetchContact}
        />
      : <Text>Loading...</Text>;
  }
}

SingleContactContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
