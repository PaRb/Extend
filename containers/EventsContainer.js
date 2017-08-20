import React, { Component } from 'react';
import { Text } from 'react-native';

import Loading from '../components/Loading';
import { getMealGroups } from '../api/contacts';

const EventsContainer = WrappedComponent =>
  class extends Component {
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
        ? <WrappedComponent
            events={events}
            refreshing={refreshing}
            handleRefresh={this.refresh}
            {...this.props}
          />
        : <Loading />;
    }
  };

export default EventsContainer;
