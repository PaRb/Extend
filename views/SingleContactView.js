import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, StyleSheet } from "react-native";

import ContactText from "../components/ContactText";
import ContactForm from "../components/ContactForm";
import MealToggler from "../components/MealToggler";
import Button from "../components/Button";
import NavigationItem from "../components/NavigationItem";

import { modifyContact } from "../api/contacts";

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
    const { contactDetail, navigation, refreshContact } = this.props;
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
              navigation={navigation}
            />}
        <Button handlePress={this.showForm} label="Toggle Form/Text" />

        <NavigationItem
          handlePress={() =>
            navigation.navigate('MealToggleView', {
              ...contactDetail,
              refreshContact,
            })}
          height={64}
        >
          <Text>Meal Toggler</Text>
        </NavigationItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    overflow: "scroll",
  },
});

SingleContactView.propTypes = {
  contactDetail: PropTypes.object.isRequired,
  refreshContact: PropTypes.func.isRequired,
};
