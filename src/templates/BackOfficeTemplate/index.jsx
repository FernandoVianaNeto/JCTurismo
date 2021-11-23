import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container, Aside, Section, ButtonContainer, Footer,
} from './styles';

export const BackOfficeTemplate = ({ children }) => (
  <Container>
    <Aside>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980716/WhatsApp_Image_2021-07-22_at_15.34.13-removebg-preview_rsmhcx.png" alt="logoimage" />
      <ButtonContainer>
        <Link to="/admin/clientes">Ver clientes</Link>
        <Link to="/admin/depoimentos">Ver depoimentos</Link>
      </ButtonContainer>
      <Footer>
        <small>Desenvolvido por Fernando Viana</small>
      </Footer>
    </Aside>
    <Section>
      {children}
    </Section>
  </Container>
);

BackOfficeTemplate.propTypes = {
  children: P.node.isRequired,
};
