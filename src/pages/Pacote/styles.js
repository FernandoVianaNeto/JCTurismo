import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    h1 {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.primaryColor};
      text-align: center;

      margin: 3rem auto;

      border-bottom: 1px solid ${theme.colors.secundaryColor};
      width: 20rem;
    }

    h3 {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.primaryColor};
      text-align: center;

      margin: 1rem auto;
    }

    .container-items {
      max-width: 120rem;

      margin: 0 auto;
    }


    .content {
      display: flex;
      justify-content: center;
      gap: 2rem;

      margin: 3rem auto;

      img {
        width: 30rem;
        height: 30rem;

        border-radius: 18px;
      }

      section {
        background-color: #F3EFF5;

        flex: 6;

        padding: 2rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        border-radius: 18px;

        .img-container {
          text-align: center;

          font-family: ${theme.font.family.texts};
        }

        .description {

          h2 {
            font-family: ${theme.font.family.texts};
            color: ${theme.colors.secundaryColor};

            text-align: center;
            margin-bottom: 2rem;
          }

          p {
            font-family: ${theme.font.family.texts};
            text-align: justify;

            padding: 1rem;
          }
        }
      }

      aside {
        padding: 2rem;

        border-radius: 18px;

        background-color: #F3EFF5;
        flex: 2;

        .pacote-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          div {
            display: flex;
            gap: 1rem;
          }
        }

        .acrescer {
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            button {
              background: transparent;
              border: none;

              display:flex;
              align-items: center;

            }
          }
        }

        p {
          font-family: ${theme.font.family.texts};
        }

        button {
          background-color: ${theme.colors.thirdColor};
          border: 1px solid ${theme.colors.primaryColor};

          font-family: ${theme.font.family.texts};
          gap: 1rem;

          cursor: pointer;
        }

      }
    }
  `}
`;
