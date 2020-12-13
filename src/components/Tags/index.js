import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Tags = ({ text, color }) => {
  return (
    <S.TagWrapper color={`rgba(${color}, 0.2)`}>
      <S.Tags color={`rgb(${color})`}>{text}</S.Tags>
    </S.TagWrapper>
  );
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Tags.defaultProps = {
  color: '0, 0, 0',
};

export default Tags;
