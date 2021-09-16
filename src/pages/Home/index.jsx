import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { WhatsappButton } from '../../components/WhatsappButton'
import { PresentationCard } from '../../components/PresentationCard';

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineSchedule } from 'react-icons/ai';

import { Presentations } from '../../subpages/Presentations';

import { data } from '../../data/data';

export const Home = () => {
  const data1 = data

  return (
    <Styled.Container>
      <div className="content">
        <header>
        <img className="image-background" id="background2" src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1628110983/julian-tilgenkamp-J6L2uT15K1o-unsplash_vr53t0.jpg" alt="background" />
          <Menu>
            <MenuLink link="/transfer">
              <FaShuttleVan />
              <p>Transfer</p>
            </MenuLink>
            <MenuLink link="/citytour">
              <GiModernCity />
              <p>CityTour</p>
            </MenuLink>
            <MenuLink link="/pacotes">
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
              Quero conhecer a Bahia
            </a>
          </div>
        </header>
        <main>
          <div className="about-us">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
            <strong>Nós somos a JCT Turismo</strong>
            <p>Empresa com gostinho baiano que vai proporcionar para você  os melhores passeios  que irá  encontrar na cidade.
            <br />
            Focada em excelência e satisfação, procuramos sempre mostrar como um cliente deve ser tratado.</p>
          </div>
          <WhatsappButton />
          <a href=" " name="passeios"> </a>
          <Presentations
            background
          >
            {
              data1.chamadas.map((card) => {
                return (
                  <PresentationCard
                    title={card.title}
                    key={card.id}
                    smallDescription={card.smallDescription}
                    imgLink={card.imgLink}
                    invert={card.invert}
                  />
                )
              })
            }
          </Presentations>
          <div className="pacotes-container">
            <div className="left-column">
              <h1>Pacotes com gostinho baiano que cabem no seu bolso</h1>
              <p>Essa sessão é exclusivamente desenvolvida para aqueles que querem conhecer a Bahia com a família sem gastar muito</p>
              <button>
               <strong>Conhecer todos os pacotes</strong>
              </button>
            </div>
            <div className="right-column">
              { data.pacotes.map((card) => {
                return (
                  <div className="pacote" key={card.id}>
                    <img src={card.imgLink} alt="" />
                    <div className="details">
                      <strong className="title">{card.title}</strong>
                      <p>{card.categoria1}</p>
                    </div>
                  </div>
                )
              }) }
            </div>
          </div>
        </main>
      </div>
    </Styled.Container>
  );


};
