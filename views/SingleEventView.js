import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SingleEventView = ({ event, members, navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {event.name}
      </Text>
      {members
        ? members.length > 0
          ? members.map(member =>
              <TouchableOpacity
                key={member.id}
                onPress={() =>
                  navigation.navigate('SingleContactView', { ...member })}
              >
                <Text style={styles.member}>
                  {member.firstName} {member.lastName}
                </Text>
              </TouchableOpacity>,
            )
          : <Text>Personne pour l'instant</Text>
        : <Text>Loading members..</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  member: {
    fontSize: 20,
    padding: 10,
  },
});

SingleEventView.propTypes = {
  event: PropTypes.object.isRequired,
};

export default SingleEventView;
