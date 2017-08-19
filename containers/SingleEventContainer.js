import React, { Component } from 'react';
import { Text } from 'react-native';

import Loading from '../components/Loading';
import SingleEventView from '../views/SingleEventView';
import { getMeal, getContactsByMeal } from '../api/contacts';

export default class SingleEventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { event: {}, members: undefined };
  }

  componentDidMount() {
    this.fetchEvent();
  }

  fetchEvent = () => {
    const id = this.props.navigation.state.params.id;
    getMeal(id)
      .then(result => {
        this.setState({ event: result });
        return result;
      })
      .then(result => getContactsByMeal(result.id))
      .then(result => this.setState({ members: result }));
  };

  render() {
    const { event, members } = this.state;

    return event.id
      ? <SingleEventView event={event} members={members} {...this.props} />
      : <Loading />;
  }
}

SingleEventContainer.propTypes = {};
