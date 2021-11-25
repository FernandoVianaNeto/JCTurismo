/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Container, DepoimentoContainer, Footer, TestimonysContainer, ButtonContainer,
} from './styles';

import { BackOfficeTemplate } from '../../../templates/BackOfficeTemplate';
// import Loader from '../../../components/Loader';

export const TestimonyAdminPage = () => {
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    fetch('https://jctturismo.herokuapp.com/depoimentos')
      .then(async (response) => {
        const depoimentosData = await response.json();
        setDepoimentos(depoimentosData);
      });
  }, []);

  return (
    <Container>
      <BackOfficeTemplate depoimentos>
        <TestimonysContainer>
          {
            depoimentos.map((depoimento) => (
              <DepoimentoContainer key={depoimento.key}>
                <h3>{depoimento.title}</h3>
                <i>{depoimento.testimony}</i>
                <Footer>
                  <small className="name">{depoimento.name}</small>
                  <small>{depoimento.date}</small>
                  <ButtonContainer>
                    <Link to={`admin/editardepoimento/${depoimento.id}`}><FiEdit2 /></Link>
                    <form action={`https://jctturismo.herokuapp.com/deletardepoimento/${depoimento.id}`} method="POST">
                      <button type="submit" aria-label="deletar depoimento"><AiOutlineDelete /></button>
                    </form>
                  </ButtonContainer>
                </Footer>
              </DepoimentoContainer>
            ))
          }
        </TestimonysContainer>

      </BackOfficeTemplate>
    </Container>
  );
};
