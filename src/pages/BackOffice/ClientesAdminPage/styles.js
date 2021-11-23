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

export const ClientesCard = styled.table`
  ${({ theme }) => css`
    height: 70px;
    width: 100%;
    background-color: ${theme.colors.backgroundColor};
    font-family: ${theme.font.family.texts};
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
