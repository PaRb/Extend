import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import { getContactById, getMealsForContact } from '../api/contacts';

const SingleContactContainer = WrappedComponent =>
  class extends Component {
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
      getContactById(id)
        .then(result => {
          this.setState({ contactDetail: result });
          return result;
        })
        .then(contact => getMealsForContact(contact))
        .then(result =>
          this.setState(prev => ({
            contactDetail: { ...prev.contactDetail, meals: result },
          })),
        );
    };

    render() {
      return Object.keys(this.state.contactDetail).length > 0
        ? <WrappedComponent
            {...this.props}
            contactDetail={this.state.contactDetail}
            refreshContact={this.fetchContact}
          />
        : <Loading />;
    }
  };

export default SingleContactContainer;
