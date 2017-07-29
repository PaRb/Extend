import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ContactList = ({ contacts }) =>
  <FlatList
    data={contacts}
    keyExtractor={(item, index) => item.id}
    renderItem={({ item }) =>
      <View style={styles.itemView}>
        <Text style={styles.itemName}>
          {item.firstName || "Prénom"} {item.lastName || "Nom"}
        </Text>
        <Text style={styles.itemMeal}>
          {item.meal || "Pas encore assigné"}
        </Text>
        <Text style={styles.itemEmail}>
          {item.email || "Pas encore d'adresse email"}
        </Text>
      </View>}
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
    color: "gray",
  },
  itemView: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "space-around",
    height: 96,
  },
  itemMeal: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
