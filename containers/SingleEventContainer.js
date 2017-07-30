import React, { Component } from 'react';
import { Text } from 'react-native';

import SingleEventView from '../views/SingleEventView';

export default class SingleEventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
    };
  }

  componentDidMount() {
    this.fetchEvent();
  }

  fetchEvent = () => {};

  render() {
    const { event } = this.state;

    return event.id
      ? <SingleEventView event={event} {...this.props} />
      : <Text>Loading...</Text>;
  }
}

SingleEventContainer.propTypes = {};
