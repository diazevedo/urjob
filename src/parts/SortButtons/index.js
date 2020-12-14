import React from 'react';
import SortButton from '~/components/SortButton';

import * as C from './styles';

const SortButtons = ({ handleOnPressSortBy }) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <C.Wrapper>
      {['date', 'relevance', 'salary'].map((item, index) => (
        <C.ButtonWrapper key={item.toString()}>
          <SortButton
            text={item}
            handleOnPressSortBy={handleOnPressSortBy}
            setActive={setSelected}
            isActive={selected === index ? 1 : 0}
            idItem={index}
          />
        </C.ButtonWrapper>
      ))}
    </C.Wrapper>
  );
};

export default SortButtons;
