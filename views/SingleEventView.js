import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import NavigationItem from '../components/NavigationItem';

const SingleEventView = ({ event, members, navigation }) => {
  return (
    <ScrollView style={styles.view}>
      {members
        ? members.length > 0
          ? members.map(member =>
              <NavigationItem
                key={member.id}
                handlePress={() =>
                  navigation.navigate('SingleContactView', { ...member })}
                height={64}
              >
                <Text style={styles.member}>
                  {member.firstName} {member.lastName}
                </Text>
              </NavigationItem>,
            )
          : <Text>Personne pour l'instant</Text>
        : <Text>Loading members..</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    padding: 16,
  },
  member: {
    fontSize: 20,
  },
});

SingleEventView.propTypes = {
  event: PropTypes.object.isRequired,
};

export default SingleEventView;
