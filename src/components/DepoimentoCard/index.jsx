import React from 'react';

import P from 'prop-types';
import { Container } from './styles';

export const DepoimentoCard = ({
  title, name, description, date,
}) => (
  <Container>
    <p>{title}</p>
    <p>{name}</p>
    <p>{description}</p>
    <p>{date}</p>
  </Container>
);

DepoimentoCard.propTypes = {
  title: P.string.isRequired,
  name: P.string.isRequired,
  description: P.string.isRequired,
  date: P.string.isRequired,
};
