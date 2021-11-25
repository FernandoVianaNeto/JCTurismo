import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  `}
`;

export const DepoimentoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    gap: 30px;

    background-color: lightgray;

    max-width: 250px;
    max-height: 350px;
    padding: 25px;

    h3 {
      color: ${theme.colors.secundaryColor};
    }

    i {
      min-height: 100px;
    }

  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 50px;

    .name {
      color: ${theme.colors.secundaryColor}
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    min-height: 50px;
    margin-top: 20px;
    width: 100%;

    button {
      background-color: transparent;
      border:none;
      color: ${theme.colors.backgroundColor};
      font-size: 16px;
    }

    a {
      color: ${theme.colors.backgroundColor};
    }
  `}
`;

export const TestimonysContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;

    padding: 20px;

    font-family: ${theme.font.family.texts};
  `}
`;
