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
      flex-direction: column;
      align-items: center;
      justify-content: center;

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

      .alterate-counter {
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

    .delete-item {
      margin-top: 1rem;
      padding: 0.5rem 2rem 0.5rem 2rem;

      font-family: ${theme.font.family.texts};
      color: ${theme.colors.primaryColor};
      text-decoration: underline;

      background: transparent;

      border: none;

      cursor: pointer;

    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      border: none;
      padding: 0;

      border: 1px solid ${theme.colors.secundaryColor};

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

        margin-top: 2rem;

        border: none;

        div {
          flex: 0;
        }
      }

      .total {
        margin-top: 2rem;
        width: 100%;
      }
    }
  `}
`;
