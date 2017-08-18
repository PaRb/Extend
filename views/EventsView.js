import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const EventsView = ({ events, navigation, refreshing, handleRefresh }) => {
  return (
    <View style={styles.view}>
      <FlatList
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={events}
        keyExtractor={event => event.id}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SingleEventView', { ...item })}
          >
            <Text style={styles.itemText}>
              {item.name}
            </Text>
          </TouchableOpacity>}
      />
    </View>
  );
};

EventsView.propTypes = {
  events: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
  item: {
    height: 40,
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
  },
});

export default EventsView;
