import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[{ key: "Pierangeloo" }, { key: "Florian" }]}
          renderItem={({ item }) =>
            <Text style={styles.item}>
              {item.key}
            </Text>}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
