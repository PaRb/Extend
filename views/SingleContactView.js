import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import ContactText from '../components/ContactText';
import ContactForm from '../components/ContactForm';
import MealToggler from '../components/MealToggler';
import Button from '../components/Button';

import { modifyContact } from '../api/contacts';

export default class SingleContactView extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

  showForm = () =>
    this.setState({ showForm: true, ...this.props.contactDetail });

  setForm = (key, value) => this.setState({ [key]: value });

  saveContact = () => {
    modifyContact(this.props.contactDetail.id, this.state)
      .then(result => {
        console.log(result);
        this.setState({ showForm: false });
      })
      .then(this.props.refreshContact);
  };

  render() {
    const { contactDetail } = this.props;
    const { showForm } = this.state;

    return (
      <ScrollView style={styles.view}>
        {showForm
          ? <ContactForm
              parentState={this.state}
              setParentState={this.setForm}
              saveContact={this.saveContact}
            />
          : <ContactText
              contactDetail={contactDetail}
              navigation={this.props.navigation}
            />}
        <Button handlePress={this.showForm} label="Switch" />
        <MealToggler />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    overflow: 'scroll',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
  },
});

SingleContactView.propTypes = {
  contactDetail: PropTypes.object.isRequired,
  refreshContact: PropTypes.func.isRequired,
};
