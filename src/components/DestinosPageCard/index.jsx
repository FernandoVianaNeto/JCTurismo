import React from 'react';

import P from 'prop-types';

import { AiOutlineArrowRight } from 'react-icons/ai';
import * as Styled from './styles';

import { useDestination } from '../../hooks/useDestination';

export const DestinosPageCard = ({
  id, title, imgLink, description, categorias,
}) => {
  const { handleSendPackage } = useDestination();

  const ultimaPosição = categorias.pacote.tipos.length - 1;

  return (
    <Styled.Container>
      <div className="content">
        <img src={imgLink} alt="imgAlt" />
        <div className="details">
          <div className="header">
            <p className="title">{title}</p>
            <p>
              <span>{categorias.individual.tipo}</span>
              {' '}
              <AiOutlineArrowRight />
              <span>{categorias.pacote.tipos[ultimaPosição].tipo}</span>
            </p>
          </div>
          <p className="description">
            {' '}
            {description}
          </p>
          <div
            className="footer"
            onClick={() => handleSendPackage({
              title, categorias, imgLink, description, id,
            })}
          >
            <button type="button">Comprar esse passeio</button>
            <p>
              A partir de
              {' '}
              <span>
                R$
                {categorias.individual.price}
                ,00
              </span>
            </p>
          </div>
        </div>
      </div>

    </Styled.Container>
  );
};

DestinosPageCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  imgLink: P.string.isRequired,
  description: P.string.isRequired,
  categorias: P.string.isRequired,
};
