import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const TouchableWithIcon = ({
  icon,
  color,
  size,
  custom = false,
  children = null,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      {!custom ? <Icon name={icon} color={color} size={size} /> : children}
    </TouchableOpacity>
  );
};

TouchableWithIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  custom: PropTypes.bool,
  children: PropTypes.element,
  onPress: PropTypes.func,
};

TouchableWithIcon.defaultProps = {};

export default TouchableWithIcon;
