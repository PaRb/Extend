import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class Contacts extends React.Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  itemName: {
    padding: 10,
    fontSize: 20,
    height: 44
  },
  itemEmail: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "gray"
  },
  itemView: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  itemMeal: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});
