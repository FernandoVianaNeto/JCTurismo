import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.secundaryColor};
    }
  `}
`;

export const ClientesContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    margin: 0 auto;

    small {
      font-family: ${theme.font.family.texts};
      color: red;
    }
  `}
`;

export const ClientesCard = styled.table`
  ${({ theme }) => css`
    height: 70px;
    width: 100%;
    background-color: ${theme.colors.backgroundColor};
    font-family: ${theme.font.family.texts};
    border-radius: 4px;
    tbody {
      th {
        color: ${theme.colors.secundaryColor};
      }

      td {
        color: ${theme.colors.thirdColor};
      }

      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
      }

      .phone {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
      }

      .know {
        width: 200px;
      }

      .op {
        width: 200px;
      }
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.secundaryColor};

    button {
      border: 0;
      background: transparent;
      font-family: ${theme.font.family.texts};
      font-size: 16px;
      cursor: pointer;
      color: ${theme.colors.thirdColor};

      transition: ease-in-out all 300ms;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.secundaryColor};

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: space-between;

      border: 2px solid ${theme.colors.secundaryColor};
      border-radius: 4px;

      background: ${theme.colors.secundaryColor};
      padding: 5px;

      font-family: ${theme.font.family.texts};
      font-size: 16px;
      color: ${theme.colors.thirdColor};

      cursor: pointer;

      transition: ease-in-out all 300ms;

      &:hover {
        border: 2px solid ${theme.colors.secundaryColor};
        color: ${theme.colors.secundaryColor};
        background-color: ${theme.colors.thirdColor};
      }
    }
  `}
`;
