import P from 'prop-types';
import * as Styled from './styles';

import { MenuLink } from '../MenuLink'

import { AiOutlineHome } from 'react-icons/ai';

export const MenuPages = ({ children }) => {
  return (
    <Styled.Container>
      <div className="content">
        <div className="logo">
          <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
        </div>
        <nav className="btn-container">
          { children }
        </nav>
      </div>
    </Styled.Container>
  );
};

MenuPages.propTypes = {
  children: P.node.isRequired,
}
