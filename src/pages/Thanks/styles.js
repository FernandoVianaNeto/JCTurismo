import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    height: 100vh;

    background-color: ${theme.colors.backgroundColor};

    box-shadow: 0 0 2rem ${theme.colors.backgroundColor};

    font-family: ${theme.font.family.texts};
    color: ${theme.colors.thirdColor};

    img {
      width: 30rem;
    }

    strong {
      font-size: 3rem;
      font-style: italic;
      font-family: ${theme.font.family.texts};

      color: ${theme.colors.secundaryColor};
    }

    p {
      text-align: center;
      max-width: 100rem;

      font-size: 2rem;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    max-width: 300px;

    a {
      background-color: ${theme.colors.secundaryColor};
      text-decoration: none;
      padding: 15px;
      border-radius: 4px;
      color: ${theme.colors.thirdColor};
      border: 2px solid ${theme.colors.secundaryColor};
      transition: ease-in-out all 300ms;

      &:hover {
        background-color: ${theme.colors.thirdColor};
        color: ${theme.colors.secundaryColor};
        border: 2px solid ${theme.colors.secundaryColor};
      }
    }

  `}
`;
