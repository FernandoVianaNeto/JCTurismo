import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const DestinationsContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px;
  `}
`;

export const DestinyCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    min-height: 50px;
    width: 200px;

    border: 1px solid ${theme.colors.primaryColor};

    font-family: ${theme.font.family.texts};

    padding: 10px;

    p {
      text-align: justify;
    }

    span {
      color: ${theme.colors.secundaryColor};
    }

    img {
      max-width: 100%;
      max-height: 200px;
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    max-width: 500px;
    margin: 0 auto;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: ${theme.font.family.texts};
      color: ${theme.colors.thirdColor};
      margin: 5px;
      background-color: transparent;
      border: 0;

      cursor: pointer;
    }

  `}
`;

export const Section = styled.section`
  ${() => css`
    width: 100%;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    button {
      border: 0;
      background: transparent;
      font-family: ${theme.font.family.texts};
      font-size: 16px;
      cursor: pointer;

      transition: ease-in-out all 300ms;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;
