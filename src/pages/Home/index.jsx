import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

import { FaShuttleVan } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineSchedule } from 'react-icons/ai';

export const Home = () => {
  return (
    <Styled.Container>
      <img className="image-background" src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628109555/felipe-dias-igsiHahfEIg-unsplash_kdz7cv.jpg" alt="background-image" />
      <div className="content">
        <Menu>
          <MenuLink text="Transfer" link="/">
            <FaShuttleVan />
            <p>Transfer</p>
          </MenuLink>
          <MenuLink text="Transfer" link="/">
            <GrMapLocation />
            <p>Itinerários</p>
          </MenuLink>
          <MenuLink text="Transfer" link="/">
            <FiPackage />
            <p>Pacotes</p>
          </MenuLink>
          <MenuLink text="Transfer" link="/">
            <AiOutlineSchedule />
            <p>Agende o seu passeio</p>
          </MenuLink>
        </Menu>
      </div>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
}
