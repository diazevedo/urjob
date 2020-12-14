import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const InputText = ({ placeholder, initialValue = 'j', onChangeText }) => {
  return (
    <C.TextInput
      placeholder={placeholder}
      value={initialValue}
      onChangeText={(text) => onChangeText(text)}
    />
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: 'position...',
};

export default InputText;
