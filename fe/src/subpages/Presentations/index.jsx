import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

export const Presentations = ({ children, background }) => (
  <Styled.Container background={background}>
    {children}
  </Styled.Container>
);

Presentations.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
};
