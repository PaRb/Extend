import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              email: "pierangelooo@gmail.com",
              firstName: "Pierangelo",
              lastName: "Rothenbühler",
              repas: "#11",
              id: 1
            },
            {
              email: "florian.bienefelt@gmail.com",
              firstName: "Florian",
              lastName: "Bienefelt",
              repas: "#10",
              id: 2
            }
          ]}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) =>
            <View style={styles.itemView}>
              <Text style={styles.itemName}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={styles.itemRepas}>
                {item.repas}
              </Text>
              <Text style={styles.itemEmail}>
                {item.email}
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
  itemRepas: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});
