import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

const AddContactButton = ({ handlePress }) =>
  <TouchableOpacity style={styles.addContactButton} onPress={handlePress}>
    <Entypo name="add-user" size={24} color={colors.primary} />
  </TouchableOpacity>;

export default AddContactButton;

const styles = StyleSheet.create({
  addContactButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 64,
    height: 64,
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
});
