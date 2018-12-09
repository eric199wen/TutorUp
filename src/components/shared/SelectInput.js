import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';

const SelectInput = ({ label, value, data, onChangeText }) => (
  <Dropdown
    label={label}
    fontSize={18}
    labelFontSize={14}
    containerStyle={{ marginHorizontal: 20 }}
    value={value}
    data={data}
    onChangeText={onChangeText}
  />
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default SelectInput;
