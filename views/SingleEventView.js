import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const SingleEventView = ({ event }) => {
  let keys = Object.keys(event);
  // Remove unecessary key
  keys = keys.filter(key => key !== '_links');

  return (
    <View style={styles.view}>
      {keys.map(key =>
        <View key={key} style={styles.item}>
          <Text style={styles.label}>
            {key}
          </Text>
          <Text style={styles.value}>
            {event[key]}
          </Text>
        </View>,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 32,
    paddingLeft: 20,
  },
  label: {
    flex: 1,
    fontSize: 20,
  },
  value: {
    flex: 1,
    fontSize: 24,
  },
});

SingleEventView.propTypes = {
  event: PropTypes.object.isRequired,
};

export default SingleEventView;
