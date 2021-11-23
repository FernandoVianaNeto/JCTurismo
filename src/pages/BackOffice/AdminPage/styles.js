import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
  `}
`;

export const DestinationsContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-around;
    margin: 50px;

    width: 100%;
  `}
`;

export const DestinyCard = styled.table`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    min-height: 50px;
    width: 100%;

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
      max-width: 200px;
      max-height: 200px;
    }

    tbody {
      width: 100%;
    }

    .imagem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      margin-right: 20px;
    }

    .description {
      width: 500px;
    }

    .title {
      margin-right: 20px;
      width: 200px;
    }

    .op {
      width: 100px;
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    max-width: 500px;
    margin: 0 auto;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
