import React from 'react';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';

const TextInput = ({ label, value, onChangeText }) => (
  <TextField
    label={label}
    fontSize={18}
    labelFontSize={14}
    containerStyle={{ marginHorizontal: 20 }}
    value={value}
    onChangeText={onChangeText}
  />
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInput;
