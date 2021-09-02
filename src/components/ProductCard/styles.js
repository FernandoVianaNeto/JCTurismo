import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.colors.secundaryColor};

   .details {
      display: flex;
      align-items: center;
      gap: 2rem;

      width: 38rem;


      padding: 2rem;

      border-right: 2px solid ${theme.colors.secundaryColor};

      img {
        width: 15rem;
        height: 15rem;

        border-radius: 50%;
      }

      p {
        font-family: ${theme.font.family.texts};

        span {
          font-weight: bold;
        }

      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 20.8rem;
      height: 19rem;

      font-family: ${theme.font.family.texts};

      border-right: 2px solid ${theme.colors.secundaryColor};
    }

    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      width: 26.2rem;
      height: 19rem;

      border-right: 2px solid ${theme.colors.secundaryColor};

      font-family: ${theme.font.family.texts};

      button {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 1rem;

        border-radius: 50%;
        border: none;

        background-color: transparent;

        font-size: 2rem;
      }
    }

    .total {
      width: 30rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: ${theme.font.family.texts};
    }
  `}
`;
