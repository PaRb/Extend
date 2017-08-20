import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

import Loading from "./Loading";
import NavigationItem from "./NavigationItem";

const keysToShow = ["id", "email", "firstName", "lastName"];

const ContactText = ({ contactDetail, navigation }) => {
  return (
    <View>
      {keysToShow.map(key =>
        <View key={key}>
          <Text style={styles.itemLabel}>
            {key}
          </Text>
          <Text style={styles.itemContent}>
            {contactDetail[key]}
          </Text>
        </View>,
      )}
      <Text style={styles.itemLabel}>Repas assigné(s)</Text>
      {contactDetail.meals
        ? contactDetail.meals.length > 0
          ? <View style={styles.meals}>
              {contactDetail.meals.map(meal =>
                <NavigationItem
                  key={meal.id}
                  handlePress={() =>
                    navigation.navigate("SingleEventView", { ...meal })}
                  height={64}
                >
                  <Text style={styles.meal}>
                    Repas {meal.name}
                  </Text>
                </NavigationItem>,
              )}
            </View>
          : <Text style={styles.noMeals}>Pas de repas!</Text>
        : <Loading fullScreen={false} />}
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContent: {
    fontSize: 18,
    padding: 8,
  },
  noMeals: {
    fontSize: 24,
    flex: 1,
    padding: 16,
    alignSelf: "center",
  },
  meals: {
    flex: 0,
    padding: 8,
  },
  meal: {
    fontSize: 24,
  },
});

ContactText.propTypes = {
  contactDetail: PropTypes.object.isRequired,
};

export default ContactText;
