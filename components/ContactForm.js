import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const inputs = ['email', 'firstName', 'lastName'];

const ContactForm = ({ parentState, setParentState, saveContact }) => {
  return (
    <View style={styles.view}>
      {inputs.map(input =>
        <TextInput
          style={styles.input}
          key={input}
          placeholder={input}
          onChangeText={text => setParentState(input, text)}
          value={parentState[input]}
        />,
      )}
      <TouchableOpacity style={styles.button} onPress={saveContact}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
  },
});

ContactForm.propTypes = {
  parentState: PropTypes.object.isRequired,
  setParentState: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired,
};

export default ContactForm;
