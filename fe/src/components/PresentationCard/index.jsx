import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

export const PresentationCard = ({
  smallDescription, title, imgLink, invert,
}) => (
  <Styled.Container>
    { invert ? (
      <div className="content">
        <div className="container">
          <h1>{title}</h1>
          <div className="smallDescription-container">
            <p>{smallDescription}</p>
          </div>
        </div>
        <img src={imgLink} alt="" />
      </div>
    ) : (
      <div className="content">
        <img src={imgLink} alt="" />
        <div className="container">
          <h1>{title}</h1>
          <div className="smallDescription-container">
            <p>{smallDescription}</p>
          </div>
        </div>
      </div>
    )}
  </Styled.Container>
);

PresentationCard.propTypes = {
  title: P.string.isRequired,
  smallDescription: P.string.isRequired,
  imgLink: P.string.isRequired,
  invert: P.bool.isRequired,
};
