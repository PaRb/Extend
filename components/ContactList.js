import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const ContactList = ({ contacts, navigate, refreshing, handleRefresh }) =>
  <FlatList
    data={contacts}
    keyExtractor={item => item.id}
    refreshing={refreshing}
    onRefresh={handleRefresh}
    renderItem={({ item }) =>
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigate('SingleContactView', { ...item })}
      >
        <View style={styles.text}>
          <Text style={styles.itemName}>
            {item.firstName || 'Prénom'} {item.lastName || 'Nom'}
          </Text>
          <Text style={styles.itemMeal}>
            {item.meal || 'Pas encore assigné'}
          </Text>
          <Text style={styles.itemEmail}>
            {item.email || "Pas encore d'adresse email"}
          </Text>
        </View>
        <Ionicons
          name="ios-arrow-forward"
          size={32}
          style={styles.icon}
          color={colors.lightGrey}
        />
      </TouchableOpacity>}
  />;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

const styles = StyleSheet.create({
  itemName: {
    fontSize: 20,
  },
  itemEmail: {
    fontSize: 18,
    color: 'gray',
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    margin: 8,
    marginBottom: 0,
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 8,
  },
  itemMeal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
