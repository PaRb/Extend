import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const keysToShow = ['id', 'email', 'firstName', 'lastName'];

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
                <TouchableOpacity
                  key={meal.id}
                  onPress={() =>
                    navigation.navigate('SingleEventView', { ...meal })}
                >
                  <Text style={styles.meal}>
                    {meal.name}
                  </Text>
                </TouchableOpacity>,
              )}
            </View>
          : <Text style={styles.itemContent}>Pas de repas!</Text>
        : <Text style={styles.itemContent}>Loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContent: {
    fontSize: 18,
    padding: 10,
  },
  meals: {
    flex: 0,
  },
  meal: {
    fontSize: 24,
    padding: 10,
  },
});

ContactText.propTypes = {
  contactDetail: PropTypes.object.isRequired,
};

export default ContactText;
