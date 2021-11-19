import React from 'react';

import P from 'prop-types';
import { Container, Footer } from './styles';

export const DepoimentoCard = ({
  title, name, description, date,
}) => (
  <Container>
    <h3>{title}</h3>

    <i>{description}</i>

    <Footer>
      <small className="name">{name}</small>
      <small>{date}</small>
    </Footer>
  </Container>
);

DepoimentoCard.propTypes = {
  title: P.string.isRequired,
  name: P.string.isRequired,
  description: P.string.isRequired,
  date: P.string.isRequired,
};
