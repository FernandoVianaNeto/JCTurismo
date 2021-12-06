import React from 'react';

import P from 'prop-types';

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdFlight } from 'react-icons/md';
import { AiOutlineSchedule, AiOutlineHome } from 'react-icons/ai';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { WhatsappButton } from '../../components/WhatsappButton';

import { Container, MenuContainer } from './styles';

export const Base = ({ destino }) => (
  <Container>
    <MenuContainer>
      <Menu background>
        <MenuLink link="/">
          <AiOutlineHome />
          <p>Home</p>
        </MenuLink>
        {
          destino ? (
            <>
              <MenuLink link="/transfer">
                <FaShuttleVan />
                <p>Transfer</p>
              </MenuLink>
              <MenuLink link="/citytour">
                <GiModernCity />
                <p>CityTour</p>
              </MenuLink>
              <MenuLink link="/destinos">
                <MdFlight />
                <p>Destinos</p>
              </MenuLink>
            </>
          ) : (
            <>
              <MenuLink link="/citytour">
                <GiModernCity />
                <p>CityTour</p>
              </MenuLink>
              <MenuLink link="/destinos">
                <MdFlight />
                <p>Destinos</p>
              </MenuLink>
            </>
          )
        }
        <MenuLink link="/">
          <AiOutlineSchedule />
          <p>Agende o seu passeio</p>
        </MenuLink>
        <MenuLink link="/">
          <AiOutlineSchedule />
          <p>Solicitar orçamento</p>
        </MenuLink>
      </Menu>
    </MenuContainer>
    <WhatsappButton />
  </Container>
);

Base.propTypes = {
  destino: P.bool,
};

Base.defaultProps = {
  destino: false,
};
