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
  window.onload = function () {
    document.getElementById('background1').style.display = 'none';
  }

  setInterval(() => {
    if (document.getElementById('background1').style.display != 'block') {
      document.getElementById('background1').style.display = 'block';
      document.getElementById('background2').style.display = 'none';
      console.log('1');
    } else {
      document.getElementById('background1').style.display = 'none';
      document.getElementById('background2').style.display = 'block';
      console.log('2')
    }
  }, 10000);


  return (
    <Styled.Container>
      <img className="image-background" id="background1"src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg" alt="background" />
      <img className="image-background" id="background2" src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" alt="background" />

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
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626983557/WhatsApp_Image_2021-07-22_at_16.51.24_lkog3u.jpg" imgAlt="Elevador lacerda a noite" title="Elevador Lacerda">
              Elevador Lacerda com a sua paisagem a noite com a vista para o mar.
            </DestinoCard>
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg" imgAlt="Pelourinho" title="Pelourinho">
              Pelourinho, mundialmente conhecido pela sua arquitetura diferenciada.
            </DestinoCard>
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg" imgAlt="Pelourinho" title="Pelourinho">
              Pelourinho, mundialmente conhecido pela sua arquitetura diferenciada.
            </DestinoCard>
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg" imgAlt="Pelourinho" title="Pelourinho">
              Pelourinho, mundialmente conhecido pela sua arquitetura diferenciada.
            </DestinoCard>
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg" imgAlt="Pelourinho" title="Pelourinho">
              Pelourinho, mundialmente conhecido pela sua arquitetura diferenciada.
            </DestinoCard>
          </div>
        </main>
      </div>
    </Styled.Container>
  );
};
