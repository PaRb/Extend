import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddContactButton = props =>
  <TouchableOpacity
    style={styles.addContactButton}
    onPress={() => {
      console.log("hello!");
    }}
  >
    <Text style={styles.addContactButtonText}>+</Text>
  </TouchableOpacity>;

export default AddContactButton;

const styles = StyleSheet.create({
  addContactButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 64,
    height: 64,
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  addContactButtonText: {
    color: "white",
    fontSize: 30,
  },
});
