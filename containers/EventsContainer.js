import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Loading from '../components/Loading';
import EventsView from '../views/EventsView';
import { getMealGroups } from '../api/contacts';

export default class MealsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({ refreshing: true }, () =>
      getMealGroups().then(result =>
        this.setState({ events: result, refreshing: false }),
      ),
    );
  };

  render() {
    const { events, refreshing } = this.state;
    return events.length > 0
      ? <EventsView
          events={events}
          refreshing={refreshing}
          handleRefresh={this.refresh}
          {...this.props}
        />
      : <Loading />;
  }
}

MealsContainer.propTypes = {};
