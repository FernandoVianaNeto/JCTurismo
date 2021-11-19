import React, { useEffect, useState } from 'react';

import { FaShuttleVan } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdFlight } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';

import { useHistory } from 'react-router-dom';

import { Container, DepoimentsContainer, Depoiments } from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { WhatsappButton } from '../../components/WhatsappButton';
import { PresentationCard } from '../../components/PresentationCard';

import { Presentations } from '../../subpages/Presentations';

import { data } from '../../data/data';
import { DepoimentoCard } from '../../components/DepoimentoCard';

export const Home = () => {
  const [destinosData, setDestinosData] = useState([]);
  const [depoimentosData, setDepoimentosData] = useState([]);
  console.log(depoimentosData);
  const { chamadas, serviços } = data;
  const history = useHistory();

  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/destinations')
      .then(async (response) => {
        const destinos = await response.json();
        setDestinosData(destinos);
      });

    fetch('https://jctturismo.herokuapp.com/depoimentos')
      .then(async (response) => {
        const depoimentos = await response.json();
        setDepoimentosData(depoimentos);
      });
  }, []);

  return (
    <Container>
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
            <MenuLink link="/destinos">
              <MdFlight />
              <p>Destinos</p>
            </MenuLink>
            <MenuLink link="/#chamada">
              <AiOutlineSchedule />
              <p>Agende o seu passeio</p>
            </MenuLink>
            <MenuLink link="/#chamada">
              <AiOutlineSchedule />
              <p>Solicie seu orçamento</p>
            </MenuLink>
          </Menu>
          <div className="title-container">
            <p className="title">
              <span>JCTurismo</span>
              <br />
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
          <WhatsappButton />
          <a href=" " name="passeios"> </a>
          <Presentations
            background
          >
            {
              chamadas.map((card) => (
                <PresentationCard
                  title={card.title}
                  key={card.id}
                  smallDescription={card.smallDescription}
                  imgLink={card.imgLink}
                  invert={card.invert}
                />
              ))
            }
          </Presentations>
          <div className="destinos-container">
            <div className="content-destinos">
              <div className="left-column">
                <h1>Destinos para você curtir o melhor da Bahia</h1>
                <p>Essa sessão é exclusivamente desenvolvida para aqueles que querem conhecer a Bahia sem gastar muito</p>
                <button
                  type="button"
                  onClick={() => history.push('/destinos')}
                >
                  <strong>Conhecer todos os destinos</strong>
                </button>
              </div>
              <div className="right-column">
                {
                  destinosData.length > 0
                    ? (
                      destinosData.map((destino) => (
                        <div className="pacote" key={destino.id} onClick={() => history.push('/destinos')}>
                          <img src={destino.imglink} alt="" />
                          <div className="details">
                            <strong className="title">{destino.title}</strong>
                            <p>{destino.status === true ? 'Disponível' : 'Indisponível'}</p>
                            <p className="description">{destino.smalldescription}</p>
                            <strong className="price">
                              a partir de R$
                              <span>
                                {destino.categories.individual.price}
                                ,00
                              </span>
                            </strong>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>Nenhum destino encontrado para você</h1>
                    )
                }
              </div>
            </div>
          </div>
          <div className="services">
            <h1>Confira nosso serviços</h1>
            <h3>Temos de tudo para oferecer para você uma estadia em Salvador com muitos passeios, turismo, alegria e felicidade com os nossos clientes</h3>
            <div className="services-container">
              { serviços.map((service) => (
                <div className="service" key={service.id}>
                  <div className="left-column">
                    <img src={service.iconLink} alt="" />
                  </div>
                  <div className="right-column">
                    <h2>{service.title}</h2>
                    <p>{service.smallDescription}</p>
                    <a href={service.link}>Ver mais</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DepoimentsContainer>
            <h1>Confira alguns depoimentos de nossos clientes</h1>
            <Depoiments>
              {
                depoimentosData.map((depoimento) => (
                  <DepoimentoCard
                    key={depoimento.id}
                    title={depoimento.title}
                    description={depoimento.description}
                    name={depoimento.name}
                    date={depoimento.date}
                  />
                ))
              }
            </Depoiments>
          </DepoimentsContainer>
          <div className="about-us">
            <a href=" " name="chamada"> </a>
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
            <strong>Nós somos a JCT Turismo</strong>
            <p>
              Empresa com gostinho baiano que vai proporcionar para você  os melhores passeios  que irá  encontrar na cidade.
              <br />
              Focada em excelência e satisfação, procuramos sempre mostrar como um cliente deve ser tratado.
            </p>
            <strong>Entre em contato conosco e marque a melhor viagem da sua vida</strong>
          </div>
        </main>
      </div>
    </Container>
  );
};
