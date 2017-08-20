import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { toggleContactToMealId } from '../api/contacts';

import Button from '../components/Button';

export default class MealToggleView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleToggle = (mealId, currentValue) => {
    const contactId = this.props.navigation.state.params.id;
    const { refreshContact } = this.props.navigation.state.params;
    if (!contactId || !refreshContact) {
      return;
    }
    this.setState({ [mealId]: true });
    toggleContactToMealId(contactId, mealId, !currentValue).then(() => {
      console.log('toggled');
      refreshContact();
      this.setState({ [mealId]: false });
    });
  };

  render() {
    const { events } = this.props;
    const contact = this.props.navigation.state.params;
    const { interests } = contact;

    return (
      <ScrollView style={styles.list}>
        {events.map(event =>
          <View key={event.id} style={styles.item}>
            <Text style={styles.name}>
              {event.name}
            </Text>
            {!this.state[event.id]
              ? interests[event.id]
                ? <Button
                    label="Enlever"
                    primary
                    handlePress={() =>
                      this.handleToggle(event.id, interests[event.id])}
                  />
                : <Button
                    label="Ajouter"
                    handlePress={() =>
                      this.handleToggle(event.id, interests[event.id])}
                  />
              : <ActivityIndicator size="small" />}
          </View>,
        )}
      </ScrollView>
    );
  }
}

MealToggleView.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  name: {
    fontSize: 24,
  },
});
