import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import EventsContainer from '../containers/EventsContainer';
import ContactsContainer from '../containers/ContactsContainer';
import SingleEventContainer from '../containers/SingleEventContainer';
import SingleContactContainer from '../containers/SingleContactContainer';

import SettingsView from './SettingsView';
import MealToggleView from './MealToggleView';
import ContactsView from './ContactsView';
import EventsView from './EventsView';
import SingleContactView from './SingleContactView';
import SingleEventView from './SingleEventView';

import SearchButton from '../components/SearchButton';

import colors from '../config/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: 'white',
  },
  headerBack: {
    color: 'white',
  },
});

const navigatorConfig = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle,
  headerBackTitleStyle: styles.headerBack,
  headerTintColor: 'white',
  gesturesEnabled: true,
};

const stacks = {
  EventsView: {
    screen: EventsContainer(EventsView),
    navigationOptions: {
      title: 'Events',
      ...navigatorConfig,
    },
  },
  SingleEventView: {
    screen: SingleEventContainer(SingleEventView),
    navigationOptions: ({ navigation }) => ({
      title: 'Repas ' + navigation.state.params.name,
      ...navigatorConfig,
    }),
  },
  SingleContactView: {
    screen: SingleContactContainer(SingleContactView),
    navigationOptions: ({ navigation }) => ({
      title:
        navigation.state.params.firstName +
        ' ' +
        navigation.state.params.lastName,
      ...navigatorConfig,
    }),
  },
  ContactsView: {
    screen: ContactsContainer(ContactsView),
    navigationOptions: ({ navigation }) => {
      const { state, setParams } = navigation;
      const { params } = state;
      return {
        title: 'Contacts',
        headerRight: (
          <SearchButton handlePress={() => setParams({ showModal: true })} />
        ),
        ...navigatorConfig,
      };
    },
  },
  SettingsView: {
    screen: SettingsView,
    navigationOptions: {
      title: 'Settings',
      ...navigatorConfig,
    },
  },
  MealToggleView: {
    screen: MealToggleView,
    navigationOptions: {
      title: 'Choisir les repas',
      ...navigatorConfig,
    },
  },
};

export default stacks;
