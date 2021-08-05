import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { DestinoCard } from '../../components/DestinoCard';
import { WhatsappButton } from '../../components/WhatsappButton'

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCaravan } from 'react-icons/fa'

import { useHistory } from 'react-router-dom';
import { Presentations } from '../../subpages/Presentations';
import { PresentationCard } from '../../components/PresentationCard';



export const Home = () => {
  const history = useHistory();

  return (
    <Styled.Container>


      <div className="content">
        <header>
        <img className="image-background" id="background2" src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" alt="background" />
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
              <GiModernCity />
              <p>CityTour</p>
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
          <div className="title-container">
            <p className="title">
              <span>JCTurismo</span>
              <br></br>
              transforma seu passeio
              <br />
              dos sonhos em realidade.
            </p>
            <button className="know-more"  onClick={() => history.push("/")}>
              Conheça mais
            </button>
          </div>
        </header>
        <main>
          <WhatsappButton />
          <Presentations
            title="Passeios com os melhores preços"
            smallDescription="Conheça o melhor da Bahia. Com estilo."
          >
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628197030/ignacio-aguilar-S7KooAJPyxk-unsplash_i9kn1v.jpg"
              title="Litoral Norte"
              subtitle="A partir de "
              price="450,00"
              bestSeller
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg"
              title="Imbassaí e Itacimirim"
              subtitle="A partir de "
              price="450,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg"
              title="Passeio de Lancha"
              subtitle="A partir de "
              price="600,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg"
              title="Praia do Forte"
              subtitle="A partir de "
              price="70,00"
            />
          </Presentations>
        </main>
      </div>
    </Styled.Container>
  );
};


{/* <div className="destiny-container">
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" imgAlt="farol da barra" title="Farol da Barra">
              Farol da barra mundialmente conhecido pela sua beleza...
            </DestinoCard>
            <DestinoCard imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628184380/cleverson-magalhaes-JfMZZqioMSU-unsplash_ej73lh.jpg " imgAlt="Elevador lacerda a noite" title="Elevador Lacerda">
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
          </div> */}
