import P from 'prop-types';
import { WhatsappButton } from '../../components/WhatsappButton';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

import { AiOutlineHome } from 'react-icons/ai';

export const Base = () => {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <Menu background>
          <MenuLink link="/">
            <AiOutlineHome />
            Home
          </MenuLink>
          <MenuLink link="/">
            <AiOutlineHome />
            Home
          </MenuLink>
        </Menu>
      </Styled.MenuContainer>
      <WhatsappButton />
    </Styled.Container>
  );
};

Base.propTypes = {

}
