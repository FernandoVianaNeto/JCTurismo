import React from 'react';
import P from 'prop-types';
import { Container, LeftColumn, RightColumn } from './styles';

export const ServiceCard = ({
  title, smallDescription, link, children,
}) => (
  <Container>
    <LeftColumn>
      {children}
    </LeftColumn>
    <RightColumn>
      <h2>{title}</h2>
      <p>{smallDescription}</p>
      <a href={link}>Ver mais</a>
    </RightColumn>
  </Container>
);

ServiceCard.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  smallDescription: P.string.isRequired,
  link: P.string.isRequired,
};
