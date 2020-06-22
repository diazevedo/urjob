import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const InputText = ({ placeholder }) => {
  return <C.TextInput placeholder={placeholder} />;
};

InputText.propTypes = {
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: 'position...',
};

export default InputText;
