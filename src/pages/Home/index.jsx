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
  console.log(data1);

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
                    id={card.id}
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
          >
            {
              data1.destinos.map((card) => {
                return (
                  <PresentationCard
                    id={card.id}
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
