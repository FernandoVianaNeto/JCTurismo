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
        background-color: white;

        width: 100%;
        flex: 2;

        img {
          width: 40rem;
        }

        h1 {
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.backgroundColor};
          width: 40rem;
          text-align: left;
        }

        form {
          width: 50rem;
        }
      }
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.backgroundColor};
        gap: 2rem;

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
