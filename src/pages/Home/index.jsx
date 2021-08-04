import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

import { FaShuttleVan } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { DestinoCard } from '../../components/DestinoCard';

export const Home = () => {
  return (
    <Styled.Container>
      <img className="image-background" src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" alt="background-image" />

      <div className="content">
        <header>
          <Menu>
            <MenuLink link="/">
              <AiOutlineHome />
              <p>Home</p>
            </MenuLink>
            <MenuLink link="/">
              <FaShuttleVan />
              <p>Transfer</p>
            </MenuLink>
            <MenuLink link="/">
              <GrMapLocation />
              <p>Itinerários</p>
            </MenuLink>
            <MenuLink link="/">
              <FiPackage />
              <p>Pacotes</p>
            </MenuLink>
            <MenuLink link="/">
              <AiOutlineSchedule />
              <p>Agende o seu passeio</p>
            </MenuLink>
          </Menu>
        </header>
        <main>
          <p className="title">
            <span>JCTurismo</span>
            <br></br>
            transforma seu passeio
            <br />
            dos sonhos em realidade.
          </p>

          <div className="destiny-container">
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" imgAlt="farol da barra" title="Farol da Barra">
              Farol da barra mundialmente conhecido pela sua beleza...
            </DestinoCard>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
}
