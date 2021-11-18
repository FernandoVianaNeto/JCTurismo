import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  Container, DestinationsContainer, FormContainer, Aside, Section, DestinyCard, ButtonContainer,
} from './styles';

import { Form } from '../../components/Form';
import Input from '../../components/Input';

export const AdminPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [showCreateDestination, setShowDeleteDestination] = useState(false);
  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/destinations')
      .then(async (response) => {
        const json = await response.json();
        setDestinations(json);
      });
  }, []);

  return (
    <Container>
      <Aside>
        {
          showCreateDestination ? (
            <div>
              <button type="button">Mostrar depoimentos</button>
              <button type="button" onClick={() => setShowDeleteDestination(false)}>Mostrar destinos </button>
            </div>
          ) : (
            <button type="button" onClick={() => setShowDeleteDestination(!showCreateDestination)}>Create destinations</button>
          )
        }

      </Aside>
      <Section>
        <DestinationsContainer>
          { showCreateDestination
            ? (
              <FormContainer>
                <Form action="https://jctturismo.herokuapp.com/createdestination" method="POST">
                  <Input
                    placeholder="Digite o destino"
                  />
                </Form>
              </FormContainer>
            ) : (
              destinations.map((destination) => (
                <DestinyCard key={destination.id}>
                  <img src={destination.imglink} alt="destination alt" />
                  <p>Título: <span>{destination.title}</span></p>
                  <ButtonContainer>
                    <button type="button" aria-label="editar"><FiEdit2 /></button>
                    <button type="button" aria-label="deletar"><AiOutlineDelete /></button>
                  </ButtonContainer>
                </DestinyCard>
              ))
            )}
        </DestinationsContainer>
      </Section>
    </Container>
  );
};

AdminPage.propTypes = {

};
