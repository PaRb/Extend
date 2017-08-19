import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NavigationItem from '../components/NavigationItem';

const EventsView = ({ events, navigation, refreshing, handleRefresh }) => {
  return (
    <View style={styles.view}>
      <FlatList
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={events}
        keyExtractor={event => event.id}
        renderItem={({ item }) =>
          <NavigationItem
            handlePress={() =>
              navigation.navigate('SingleEventView', { ...item })}
            height={64}
          >
            <Text style={styles.itemText}>
              Repas {item.name}
            </Text>
          </NavigationItem>}
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
  itemText: {
    fontSize: 20,
  },
});

export default EventsView;
