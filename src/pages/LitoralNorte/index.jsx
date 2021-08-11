import P from 'prop-types';
import * as Styled from './styles';

import { MenuPages } from '../../components/MenuPages';
import { MenuLink } from '../../components/MenuLink';

import { AiOutlineHome } from 'react-icons/ai';
import {  } from 'react-icons'
import { Destinations } from '../../subpages/Destinations';

export const LitoralNorte = () => {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <MenuPages>
          <MenuLink link="/">
            <AiOutlineHome />
            Home
          </MenuLink>
          <MenuLink link="/">
            <AiOutlineHome />
            Home
          </MenuLink>
        </MenuPages>
      </Styled.MenuContainer>

      <Destinations />
    </Styled.Container>
  );
};

LitoralNorte.propTypes = {
  children: P.node.isRequired,
}
