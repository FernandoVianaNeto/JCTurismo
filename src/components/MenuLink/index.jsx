import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link }) => (
  <Styled.Container>
    <div className="container">
      <a href={link}>
        {children}
      </a>
    </div>
  </Styled.Container>
);

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
};
