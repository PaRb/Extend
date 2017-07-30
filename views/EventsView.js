import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const EventsView = ({ events }) =>
  <View>
    <FlatList
      data={events}
      keyExtractor={event => event.id}
      renderItem={({ item }) =>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>
            {item.name}
          </Text>
        </TouchableOpacity>}
    />
  </View>;

EventsView.propTypes = {
  events: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  item: {
    height: 40,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
  },
});

export default EventsView;
