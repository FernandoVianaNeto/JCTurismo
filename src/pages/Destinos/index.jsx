import React, { useEffect, useState, useMemo } from 'react';
import {
  Container, Content, Group, SmallGroup,
} from './styles';

import { Base } from '../../templates/Base';
import Loader from '../../components/Loader';
import { DestinosPageCard } from '../../components/DestinosPageCard';

export const Destinos = () => {
  const [destinos, setDestinos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinos = useMemo(() => destinos.filter((destino) => (
    destino.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [destinos, searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jctturismo.herokuapp.com/destinations')
      .then(async (response) => {
        const json = await response.json();
        setDestinos(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loader isLoading={isLoading} />}
      <Base destino />
      <Content>
        <SmallGroup>
          <h1>Os melhores pacotes com os melhores preços</h1>
          <input
            type="text"
            placeholder="Qual destino você procura?"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </SmallGroup>
        <Group>
          {
            filteredDestinos.length > 0 ? (
              filteredDestinos.map((card) => (
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
