import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    height: 20rem;
    width: 55rem;

    margin-top: 2rem;

    .p-container {
      background-color: ${theme.colors.primaryColor};
      padding: 3rem;
      width: 40%;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      border-radius: 10px;

      p {
        color: ${theme.colors.thirdColor};
        font-family: ${theme.font.family.texts};

        span {
          font-size: 2rem;
          font-weight: bold;
          color: ${theme.colors.secundaryColor};
        }
      }
    }

    .img-container {
      background-color: ${theme.colors.secundaryColor};
    }
  `}
`;
