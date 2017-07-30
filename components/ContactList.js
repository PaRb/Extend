import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ContactList = ({ contacts, navigate, refreshing, handleRefresh }) =>
  <FlatList
    data={contacts}
    keyExtractor={item => item.id}
    refreshing={refreshing}
    onRefresh={handleRefresh}
    renderItem={({ item }) =>
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigate('SingleContactView', { id: item.id })}
      >
        <Text style={styles.itemName}>
          {item.firstName || 'Prénom'} {item.lastName || 'Nom'}
        </Text>
        <Text style={styles.itemMeal}>
          {item.meal || 'Pas encore assigné'}
        </Text>
        <Text style={styles.itemEmail}>
          {item.email || "Pas encore d'adresse email"}
        </Text>
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
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    height: 96,
  },
  itemMeal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
