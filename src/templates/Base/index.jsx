import P from 'prop-types';
import { WhatsappButton } from '../../components/WhatsappButton';
import * as Styled from './styles';

import { MenuPages } from '../../components/MenuPages';
import { MenuLink } from '../../components/MenuLink';

import { AiOutlineHome } from 'react-icons/ai';

export const Base = () => {
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
      <WhatsappButton />
    </Styled.Container>
  );
};

Base.propTypes = {

}
