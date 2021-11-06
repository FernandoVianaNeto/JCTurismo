import React from 'react';

import P from 'prop-types';

import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  Container, Content, Group, Footer, Header,
} from './styles';

import { useDestination } from '../../hooks/useDestination';

export const DestinosPageCard = ({
  id, title, imglink, description, categories,
}) => {
  const { handleSendPackage } = useDestination();

  const ultimaPosição = categories.pacote.types.length - 1;

  return (
    <Container>
      <Content>
        <img src={imglink} alt="imgAlt" />
        <Group>
          <Header>
            <p>{title}</p>
            <p>
              <span>{categories.individual.type}</span>
              {' '}
              <AiOutlineArrowRight />
              <span>{categories.pacote.types[ultimaPosição].type}</span>
            </p>
          </Header>
          <p className="description">
            {' '}
            {description}
          </p>
          <Footer
            onClick={() => handleSendPackage({
              title, categories, imglink, description, id,
            })}
          >
            <button type="button">Comprar esse passeio</button>
            <p>
              A partir de
              {' '}
              <span>
                R$
                {categories.individual.price}
                ,00
              </span>
            </p>
          </Footer>
        </Group>
      </Content>
    </Container>
  );
};

DestinosPageCard.propTypes = {
  id: P.string.isRequired,
  title: P.string.isRequired,
  imglink: P.string.isRequired,
  description: P.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  categories: P.object.isRequired,
};
