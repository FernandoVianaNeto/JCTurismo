import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, ButtonContainer } from './styles';

export const Thanks = () => (
  <Container>
    <Content>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
      <strong>Nós somos a JCT Turismo</strong>
      <p>
        Obrigado por entrar em contato conosco!
      </p>
      <strong>Em breve retornaremos a sua solicitação para ajustar tudo!</strong>
      <ButtonContainer>
        <Link to="/">Voltar para a página principal</Link>
      </ButtonContainer>
    </Content>
  </Container>
);
