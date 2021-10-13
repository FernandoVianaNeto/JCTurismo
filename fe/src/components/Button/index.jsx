import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, desabilitado = false }) => (
  <Styled.Container desabilitado={desabilitado}>
    <button type="button" className={desabilitado ? 'disabled' : ''}>{children}</button>
  </Styled.Container>
);

Button.propTypes = {
  children: P.node.isRequired,
  desabilitado: P.bool.isRequired,
};
