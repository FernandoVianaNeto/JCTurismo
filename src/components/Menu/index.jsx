import React, { useState } from 'react';

import P from 'prop-types';

import { AiFillPhone, AiFillInstagram, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

import * as Styled from './styles';

export const Menu = ({ children, background = false }) => {
  const [expansed, setExpansed] = useState(true);

  return (
    <Styled.Container background={background}>
      <div className="container">
        <button type="button" className="show-options" onClick={() => setExpansed(!expansed)}>
          <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
          {expansed ? (
            <p>
              Ver menos
              <BiUpArrow />
            </p>
          ) : (
            <p>
              {' '}
              Ver mais
              <BiDownArrow />
            </p>
          )}
        </button>
        { expansed
          && (
            <>
              <div className="flex-left">
                <div className="phone">
                  <AiFillPhone />
                  <p>Fale Conosco: (71) 99999-9999</p>
                  <a href="https://www.instagram.com/jctturismo.ba/" className="instagram-link">
                    {' '}
                    <AiFillInstagram />
                    {' '}
                  </a>
                </div>
                <div className="shopping-cart">
                  <a href="/carrinhodecompras">
                    <AiOutlineShoppingCart />
                    <p>Meu carrinho</p>
                  </a>
                </div>
              </div>
              <div className="flex-right">
                <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
                <div className="btn-container">
                  {children}
                </div>
              </div>
            </>
          )}

      </div>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};

Menu.defaultProps = {
  background: false,
};
