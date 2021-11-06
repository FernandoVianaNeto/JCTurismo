import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100vw;
    min-height: 100vh;

    .payment-container {
      display: flex;

      width: 100vw;
      height: 100vh;

      aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        width: 100rem;

        background-color: white;

        /* background-color: white; */

        flex: 2;

        h1 {
          width: 100%;
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.secundaryColor};
          text-align: center;
          margin: 0 auto;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin: 0 auto;

          small {
            font-family: ${theme.font.family.texts};
            text-align: left;
          }

          button {
            width: 100%;
          }
        }

        .price-footer{
          width: 100%;
          text-align: center;
        }
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.backgroundColor};
        gap: 2rem;

        padding: 3rem;
        flex: 1;

        h1 {
          text-align: center;
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.thirdColor};
        }
      }

    }

    .congratulations {
      min-height: 100vh;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;

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
    }
  `}
`;

export const Form = styled.form`
  ${() => css`


  `}
`;

export const Group = styled.form`
  ${() => css`


  `}
`;
