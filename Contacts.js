import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default class Contacts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
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
        />
        <TouchableOpacity
          style={styles.addContactButton}
          onPress={() => {
            console.log("hello!");
          }}
        >
          <Text style={styles.addContactButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  itemName: {
    fontSize: 20
  },
  itemEmail: {
    fontSize: 18,
    color: "gray"
  },
  itemView: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "space-around",
    height: 96
  },
  itemMeal: {
    fontSize: 18,
    fontWeight: "bold"
  },
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
    borderRadius: 32
  },
  addContactButtonText: {
    color: "white",
    fontSize: 30
  }
});
