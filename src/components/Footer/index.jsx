import P from 'prop-types';
import * as Styled from './styles';

import { AiFillInstagram } from 'react-icons/ai'

export const Footer = (children) => {
  return (
    <Styled.Container>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
      <div className="contacts">
        <p>(71) 99370-1109</p>
        <button><AiFillInstagram /></button>

      </div>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
}
