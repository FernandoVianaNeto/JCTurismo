import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .image-background {
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .content {
      z-index: 1;
      font-family: ${theme.font.family.texts};

      header {
        height: 100vh;

        .title-container {
          padding: 5rem;

          .title {
            font-size: 5rem;
            color: ${theme.colors.thirdColor};

            margin-bottom: 5rem;

            span {
              font-weight: bold;
              color: ${theme.colors.secundaryColor};
            }
          }

          .know-more {
            padding: 1rem 3rem 1rem 3rem;

            background-color: ${theme.colors.thirdColor};
            color: ${theme.colors.secundaryColor};

            font-size: 1.7rem;
            font-family: ${theme.font.family.texts};
            font-weight: bold;
            letter-spacing: 0.05em;

            border-radius: 25px;
            border: 2px solid ${theme.colors.secundaryColor};

            cursor: pointer;

            transition: ease-in-out all 300ms;

            text-decoration: none;

            &:hover {
              background-color: ${theme.colors.secundaryColor};
              color: ${theme.colors.thirdColor};
              border: 2px solid ${theme.colors.thirdColor};

              font-weight: bold;
            }
          }
        }
      }

      main {
        .pacotes-container {
          min-height: 100vh;
          background-color: ${theme.colors.backgroundColor};
          box-shadow: 0 0 2rem ${theme.colors.backgroundColor};

          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 2rem;

          padding: 2rem;

          .left-column {
            color: ${theme.colors.thirdColor};
            flex: 1;

            text-align: center;

            h1 {
              color: ${theme.colors.secundaryColor};
            }

            button {
              margin-top: 5rem;
              padding: 1rem 2rem 1rem 2rem;

              background-color: ${theme.colors.thirdColor};
              border: 1px solid ${theme.colors.secundaryColor};

              color: ${theme.colors.secundaryColor};
              font-family: ${theme.font.family.texts};

              cursor: pointer;

              transition: ease-in-out all 300ms;

              &:hover {
                background-color: ${theme.colors.secundaryColor};
                color: ${theme.colors.thirdColor};
              }
            }
          }

          .right-column {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;
            align-items: center;
            justify-content: center;

            .pacote {
              display: flex;
              align-items: center;
              gap: 1rem;

              border-top-left-radius: 18px;
              border-bottom-right-radius: 18px;

              background-color: ${theme.colors.thirdColor};

              img {
                flex: 1;
                width: 15rem;
                height: 15rem;
                border-top-left-radius: 18px;
              }

              .details {
                flex: 1;
                display: flex;
                flex-direction: column;

                .title {
                  color: ${theme.colors.secundaryColor};
                }
              }
            }
          }

        }

        .about-us {
          min-height: 100vh;

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

      }

    @media ${theme.media.lteMedium} {
      .content {
        header {
          .title-container {
            .title {
              margin-top: 10rem;
              font-size: 4rem;
            }
          }
        }
      }
    }
  `}
`;
