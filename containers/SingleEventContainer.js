import React, { Component } from 'react';
import { Text } from 'react-native';

import Loading from '../components/Loading';
import SingleEventView from '../views/SingleEventView';
import { getMeal, getContactsByMeal } from '../api/contacts';

const SingleEventContainer = WrappedComponent =>
  class extends Component {
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
        .then(meal => {
          this.setState({ event: meal });
          return getContactsByMeal(meal.id);
        })
        .then(members => this.setState({ members }));
    };

    render() {
      const { event, members } = this.state;

      return event.id
        ? <WrappedComponent event={event} members={members} {...this.props} />
        : <Loading />;
    }
  };

export default SingleEventContainer;
