import { WhatsappButton } from '../../components/WhatsappButton';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdFlight } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

export const Base = () => {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <Menu background>
        <MenuLink link="/">
          <AiOutlineHome />
            <p>Home</p>
          </MenuLink>
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
          <MenuLink link="/">
            <AiOutlineSchedule />
            <p>Agende o seu passeio</p>
          </MenuLink>
        </Menu>
      </Styled.MenuContainer>
      <WhatsappButton />
    </Styled.Container>
  );
};

Base.propTypes = {

}
