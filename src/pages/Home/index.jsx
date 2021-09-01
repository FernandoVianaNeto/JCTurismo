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

import { useHistory } from 'react-router-dom';
import { Presentations } from '../../subpages/Presentations';

import { data } from '../../data/data';

export const Home = () => {
  const history = useHistory();

  const data1 = data

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
              Levamos você
              <br />
              para os melhores destinos.
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
            {/* <div className="option-container">
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
            </div>*/}
          </div>

          <Presentations
            title="Passeios com os melhores preços"
            smallDescription="Conheça o melhor da Bahia. Com estilo."
            background
          >
            {
              data1.destinos.map((card) => {
                return (
                  <PresentationCard
                    key={card.id}
                    imgLink={card.imgLink}
                    title={card.title}
                    subtitle={card.subtitle}
                    bestSeller={card.bestSeller}
                    price={card.price}
                    link={card.link}
                    description={card.description}
                  />
                )
              })
            }
          </Presentations>
          <Presentations
            title="Passeios com os melhores preços"
            smallDescription="Conheça o melhor da Bahia. Com estilo."
            invert
          >
            {
              data1.destinos.map((card) => {
                return (
                  <PresentationCard
                    key={card.id}
                    imgLink={card.imgLink}
                    title={card.title}
                    subtitle={card.subtitle}
                    bestSeller={card.bestSeller}
                    price={card.price}
                    link={card.link}
                    description={card.description}
                  />
                )
              })
            }
          </Presentations>
        </main>
      </div>
    </Styled.Container>
  );


};
