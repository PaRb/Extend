import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

const AddContactForm = ({ myStyle, setEmail, email }) => {
  return (
    <TextInput
      style={myStyle}
      placeholder="Add email address"
      onChangeText={setEmail}
      value={email}
    />
  );
};

AddContactForm.propTypes = {
  setEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default AddContactForm;
