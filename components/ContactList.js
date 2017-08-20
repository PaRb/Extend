import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import NavigationItem from "./NavigationItem";

const ContactList = ({ contacts, navigate, refreshing, handleRefresh }) =>
  <FlatList
    data={contacts}
    keyExtractor={item => item.id}
    refreshing={refreshing}
    onRefresh={handleRefresh}
    renderItem={({ item }) =>
      <NavigationItem
        handlePress={() => navigate("SingleContactView", { ...item })}
      >
        <View style={styles.text}>
          <Text style={styles.itemName}>
            {item.firstName || "Prénom"} {item.lastName || "Nom"}
          </Text>
          <Text style={styles.itemEmail}>
            {item.email || "Pas encore d'adresse email"}
          </Text>
        </View>
      </NavigationItem>}
  />;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

const styles = StyleSheet.create({
  text: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemEmail: {
    fontSize: 18,
    color: "gray",
  },
});
