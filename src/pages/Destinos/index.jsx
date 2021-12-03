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
        const destinosData = await response.json();
        setDestinos(destinosData);
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
            destinos !== [] ? (
              filteredDestinos.map((destino) => (
                <DestinosPageCard
                  key={destino.id}
                  imglink={destino.imglink}
                  title={destino.title}
                  categories={destino.categories}
                  description={destino.description}
                  id={destino.id}
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
