import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.colors.secundaryColor};
    border-radius: 18px;

   .details {
      display: flex;
      align-items: center;
      gap: 2rem;

      width: 38rem;

      padding: 2rem;

      border-right: 1px solid ${theme.colors.secundaryColor};

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

      border-right: 1px solid ${theme.colors.secundaryColor};
    }

    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      width: 26.2rem;
      height: 19rem;

      border-right: 1px solid ${theme.colors.secundaryColor};

      font-family: ${theme.font.family.texts};

      .name {
        margin-left: 1rem;
      }

      div {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 2rem;
      }

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

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      border: none;
      padding: 0;

      .details {
        display: flex;
        flex-direction: column;

        padding: 0;
        margin: 3rem 2rem 2rem 2rem;
        width: 100%;

        border: none;
      }

      .price {
        height: 3rem;
        border-right: none;
        width: 100%;

        p {
          display: flex;
        }
      }

      .amount {
        height: 3rem;
        width: 100%;

        border: none;
      }

      .total {
        width: 100%;
        border-bottom: 1px solid ${theme.colors.secundaryColor};
      }
    }
  `}
`;
