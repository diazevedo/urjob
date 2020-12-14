import React from 'react';

import * as C from './styles';

const SortButton = ({
  text,
  isActive = 0,
  handleOnPressSortBy,
  setActive,
  idItem,
}) => {
  return (
    <C.Button
      key={idItem.toString()}
      onPress={() => {
        handleOnPressSortBy(text);
        setActive(idItem);
      }}>
      <C.Text isActive={isActive}>{text}</C.Text>
    </C.Button>
  );
};

export default SortButton;
