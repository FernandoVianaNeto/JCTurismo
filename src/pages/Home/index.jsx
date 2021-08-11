import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { WhatsappButton } from '../../components/WhatsappButton'
import { PresentationCard } from '../../components/PresentationCard';

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

//import { useHistory } from 'react-router-dom';
import { Presentations } from '../../subpages/Presentations';
import { ADCard } from '../../components/ADCard';
import { SelectIcon } from '../../icons/SelectIcon';
import { ADCardSmall } from '../../components/ADCardSmall';


export const Home = () => {
  //const history = useHistory();

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
            <a className="know-more" href="#passeios">
              Conheça mais
            </a>
          </div>
        </header>
        <main>
          <WhatsappButton />
          <a href=" " name="passeios"> </a>
          <div className="ad-container">
            <h1>Promoções de passeios que cabem no seu bolso</h1>
            <div className="option-container">
              <ADCard
                title="Transfer"
                subtitle="Aeroporto - Hotel"
                imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628278707/WhatsApp_Image_2021-08-06_at_16.38.05_fulolx.jpg"
                imgAlt="Aeroporto de Salvador"
              >
                <p className="children">
                  Mais conforto e segurança para a sua viagem
                  <br />
                  <br />
                  <span className="children-desconto">
                    *Desconto de 10% a vista
                  </span>

                  <button>
                    Reserve agora
                  </button>
                </p>
              </ADCard>
              <ADCardSmall
                title="Transfer"
                subtitle="Aeroporto - Hotel"
                imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628278707/WhatsApp_Image_2021-08-06_at_16.38.05_fulolx.jpg"
                imgAlt="Aeroporto de Salvador"
              >
                <p className="children">
                  Mais conforto e segurança para a sua viagem
                  <br />
                  <br />
                  <span className="children-desconto">
                    *Desconto de 10% a vista
                  </span>
                  <button>
                    Reserve agora
                  </button>
                </p>
              </ADCardSmall>
            </div>
          </div>

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
              link="/litoralnorte"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200321/WhatsApp_Image_2021-08-05_at_18.51.51_ii5qlq.jpg"
              title="Imbassaí e Itacimirim"
              subtitle="A partir de "
              price="450,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200266/WhatsApp_Image_2021-08-05_at_18.50.54_jf00rc.jpg"
              title="Passeio de Lancha"
              subtitle="A partir de "
              price="600,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200208/WhatsApp_Image_2021-08-05_at_18.49.57_ehjfpe.jpg"
              title="Passeio Ilha dos Frades Itaparica"
              subtitle="A partir de "
              price="70,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg"
              title="CityTour"
              subtitle="A partir de "
              price="250,00"
            />
          </Presentations>
          <Presentations
            title="Passeios com os melhores preços"
            smallDescription="Conheça o melhor da Bahia. Com estilo."
            invert
          >
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628197030/ignacio-aguilar-S7KooAJPyxk-unsplash_i9kn1v.jpg"
              title="Litoral Norte"
              subtitle="A partir de "
              price="450,00"
              bestSeller
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200321/WhatsApp_Image_2021-08-05_at_18.51.51_ii5qlq.jpg"
              title="Imbassaí e Itacimirim"
              subtitle="A partir de "
              price="450,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200266/WhatsApp_Image_2021-08-05_at_18.50.54_jf00rc.jpg"
              title="Passeio de Lancha"
              subtitle="A partir de "
              price="600,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200208/WhatsApp_Image_2021-08-05_at_18.49.57_ehjfpe.jpg"
              title="Passeio Ilha dos Frades Itaparica"
              subtitle="A partir de "
              price="70,00"
            />
            <PresentationCard
              imgLink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg"
              title="CityTour"
              subtitle="A partir de "
              price="250,00"
            />
          </Presentations>
        </main>
      </div>
    </Styled.Container>
  );


};
