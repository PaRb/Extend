import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const ContactText = ({ contactDetail }) => {
  const keys = Object.keys(contactDetail);

  return (
    <View>
      {keys.map(key =>
        <View key={key}>
          <Text style={styles.itemLabel}>
            {key}
          </Text>
          <Text style={styles.itemContent}>
            {contactDetail[key]}
          </Text>
        </View>,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContent: {
    fontSize: 18,
  },
});

ContactText.propTypes = {
  contactDetail: PropTypes.object.isRequired,
};

export default ContactText;
