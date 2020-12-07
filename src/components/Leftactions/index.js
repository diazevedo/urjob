/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import * as C from './styles';

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
  });

  return (
    <C.WrapperActionButtons>
      <C.ActionButton color="#5EC28E">
        {/* <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 20,
            fontSize: 12,
            transform: [{ scale }],
          }}> */}
        <C.TextAction>Aply Now</C.TextAction>

        {/* </Animated.Text> */}
      </C.ActionButton>
      <C.ActionButton color="#6379E9" isLast={1}>
        {/* <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 20,
            fontSize: 12,
            transform: [{ scale }],
          }}> */}
        <C.TextAction>To favorites</C.TextAction>
        {/* </Animated.Text> */}
      </C.ActionButton>
    </C.WrapperActionButtons>
  );
};

export default LeftActions;
