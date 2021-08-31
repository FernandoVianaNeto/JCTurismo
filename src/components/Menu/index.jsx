import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import { AiFillPhone } from 'react-icons/ai';
import { BiDownArrow } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';

export const Menu = ({ children, background = false }) => {
  const [expansed, setExpansed] = useState(true);

  return (
    <Styled.Container background={background}>
      <div className="container">
        <button className="show-options" onClick={() => setExpansed(!expansed)}>
          <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
          {expansed ? (
            <p><BiUpArrow /></p>
          ) : (
            <p><BiDownArrow /></p>
          )}
        </button>
        { expansed &&
          (
            <>
          <div className="flex-left">
            <div className="phone">
              <AiFillPhone />
              <p>Fale Conosco: (71) 99999-9999</p>
            </div>
          </div>
          <div className="flex-right">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
            <div className="btn-container">
              {children}
            </div>
          </div>
          </>
          )
        }

      </div>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
}
