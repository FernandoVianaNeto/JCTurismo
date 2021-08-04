import P from 'prop-types';
import * as Styled from './styles';

import { AiFillPhone } from 'react-icons/ai';

export const Menu = ({ children }) => {
  return (
    <Styled.Container>
      <div className="container">
        <div className="flex-left">
          <div class="phone">
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
      </div>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
}
