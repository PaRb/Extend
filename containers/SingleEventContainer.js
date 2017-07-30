import React, { Component } from 'react';
import { Text } from 'react-native';

import SingleEventView from '../views/SingleEventView';
import { getMeal } from '../api/contacts';

export default class SingleEventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { event: {} };
  }

  componentDidMount() {
    this.fetchEvent();
  }

  fetchEvent = () => {
    const id = this.props.navigation.state.params.id;
    getMeal(id).then(result => this.setState({ event: result }));
  };

  render() {
    const { event } = this.state;

    return event.id
      ? <SingleEventView event={event} {...this.props} />
      : <Text>Loading...</Text>;
  }
}

SingleEventContainer.propTypes = {};
