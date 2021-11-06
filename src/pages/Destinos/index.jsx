import React, { useEffect, useState } from 'react';
import { Container, Content, Group } from './styles';

import { Base } from '../../templates/Base';
// import { data } from '../../data/data';
import { DestinosPageCard } from '../../components/DestinosPageCard';

export const Destinos = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/destinations')
      .then(async (response) => {
        const json = await response.json();
        setDestinos(json);
      });
  }, []);

  return (
    <Container>
      <Base />
      <Content>
        <h1>Os melhores pacotes com os melhores preços</h1>
        <Group>
          {
            destinos.length > 0 ? (
              destinos.map((card) => (
                <DestinosPageCard
                  key={card.id}
                  imglink={card.imglink}
                  title={card.title}
                  categories={card.categories}
                  description={card.description}
                  id={card.id}
                />
              ))
            ) : (
              <h1>Não encontramos nenhum destino</h1>
            )
          }
        </Group>
      </Content>
    </Container>
  );
};
