import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container, Aside, Section, ButtonContainer, Footer,
} from './styles';

export const BackOfficeTemplate = ({
  children, clientes, depoimentos, home,
}) => (
  <Container>
    <Aside>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980716/WhatsApp_Image_2021-07-22_at_15.34.13-removebg-preview_rsmhcx.png" alt="logoimage" />
      <ButtonContainer>
        {
          depoimentos && (
            <>
              <Link to="/admin/clientes">Ver Clientes</Link>
              <Link to="/admin/home">Ver Destinos</Link>
            </>
          )
        }
        {
          clientes && (
            <>
              <Link to="/admin/depoimentos">Ver Depoimentos</Link>
              <Link to="/admin/home">Ver Destinos</Link>
            </>
          )
        }
        {
          home && (
            <>
              <Link to="/admin/clientes">Ver Clientes</Link>
              <Link to="/admin/depoimentos">Ver Depoimentos</Link>
            </>
          )
        }
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
  depoimentos: P.bool,
  clientes: P.bool,
  home: P.bool,
};

BackOfficeTemplate.defaultProps = {
  depoimentos: false,
  clientes: false,
  home: false,
};
