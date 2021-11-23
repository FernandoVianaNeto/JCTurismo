import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  Container, DestinationsContainer, DestinyCard, ButtonContainer,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';

export const AdminPage = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/destinations')
      .then(async (response) => {
        const json = await response.json();
        setDestinations(json);
      });
  }, []);

  return (
    <Container>
      <BackOfficeTemplate>
        <DestinationsContainer>
          {
            destinations.map((destination) => (
              <DestinyCard key={destination.id}>
                <table>
                  <tr>
                    <th>Imagem</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Opções</th>
                  </tr>
                  <tr>
                    <td className="imagem"><img src={destination.imglink} alt="destino logo" /></td>
                    <td className="title"><span><p>{destination.title}</p></span></td>
                    <td className="description"><p>{destination.smalldescription}</p></td>
                    <td>
                      <ButtonContainer>
                        <button type="button" aria-label="editar"><FiEdit2 /></button>
                        <button type="button" aria-label="deletar"><AiOutlineDelete /></button>
                      </ButtonContainer>
                    </td>
                  </tr>
                </table>
              </DestinyCard>
            ))
          }
        </DestinationsContainer>
      </BackOfficeTemplate>
    </Container>
  );
};

AdminPage.propTypes = {

};
