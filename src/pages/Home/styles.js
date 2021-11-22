import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
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
            padding: 1rem 2rem 1rem 2rem;

            background-color: ${theme.colors.thirdColor};
            color: ${theme.colors.secundaryColor};

            font-size: 1.7rem;
            font-family: ${theme.font.family.texts};
            font-weight: bold;
            letter-spacing: 0.05em;

            border: 1px solid ${theme.colors.thirdColor};

            cursor: pointer;

            transition: ease-in-out all 300ms;

            text-decoration: none;

            &:hover {
              background-color: ${theme.colors.secundaryColor};
              border: 1px solid ${theme.colors.secundaryColor};
              color: ${theme.colors.thirdColor};
              font-weight: normal;
            }
          }
        }
      }

      main {
        .destinos-container {
          min-height: 100vh;
          background-color: ${theme.colors.backgroundColor};
          box-shadow: 0 0 2rem ${theme.colors.backgroundColor};

          padding: 4rem 2rem 4rem 2rem;

          .content-destinos {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;

            max-width: 140rem;
            margin: 0 auto;
          }

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
            flex: 2;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2rem;
            align-items: center;
            justify-content: center;

            .pacote {
              display: flex;
              flex-direction: column;
              gap: 1rem;

              padding: 1rem;

              width: 25rem;

              border-top-left-radius: 18px;
              border-bottom-right-radius: 18px;

              background-color: ${theme.colors.thirdColor};

              cursor: pointer;

              img {
                flex: 1;
                width: 100%;
                max-height: 20rem;
                min-height: 20rem;
                border-top-left-radius: 18px;
                transition: ease-in-out all 300ms;
              }

              .details {
                flex: 1;
                display: flex;
                flex-direction: column;

                .title {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;

                  border-bottom: 1px solid ${theme.colors.secundaryColor};
                  margin: 0 auto;

                  min-height: 5rem;
                  color: ${theme.colors.secundaryColor};
                }

                p {
                  display: flex;
                  align-items: center;
                  height: 5rem;
                }

                .description {
                  display: flex;
                  align-items: flex-start;

                  text-align: justify;

                  height: 20rem;
                }

                .price {
                  width: 100%;
                  text-align: right;
                  color: ${theme.colors.backgroundColor};
                  height: 5rem;

                  display: flex;
                  align-items: center;
                  justify-content: right;

                  span {
                    font-size: 2rem;
                    color: ${theme.colors.secundaryColor};
                  }
                }
              }

              &:hover {
                img {
                  transform: scale(1.05)
                }
              }
            }
          }
        }

        .services {
          min-height: 100vh;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          gap: 5rem;

          padding: 5rem;

          h1 {
            color: ${theme.colors.secundaryColor};
          }

          h3 {
            text-align: center;
          }

          .services-container {
            display: flex;
            gap: 3rem;
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
    }

    @media (max-width: 768px) {
      .content {
        header {
          .title-container {
            .title {
              margin-top: 10rem;
              font-size: 4rem;
            }
          }
        }

        main {
          .destinos-container {
            .content-destinos {
              display: flex;
              flex-direction: column;

              .right-column {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
              }
            }
          }

          .services {
            text-align: center;
            display: flex;
            flex-direction: column;

            .services-container {
              display: flex;
              flex-direction: column;
            }
          }

          .about-us {
            text-align: center;
            padding: 2rem;
          }
        }
      }
    }
  `}
`;

export const DepoimentsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 120vh;
    background-color: ${theme.colors.backgroundColor};
    border-bottom: 1px solid ${theme.colors.secundaryColor};
    padding: 50px;

    h1 {
      color: ${theme.colors.secundaryColor};
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${() => css`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Depoiments = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    font-weight: bold;
    padding: 50px 0px;
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    padding: 15px 25px;

    font-family: ${theme.font.family.texts};
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.secundaryColor};

    background-color: ${theme.colors.thirdColor};

    border: 2px solid ${theme.colors.thirdColor};
    cursor: pointer;

    transition: ease-in-out all 300ms;
    text-decoration: none;
    &:hover {
      border: 2px solid ${theme.colors.secundaryColor};
      font-weight: bold;
    }
  `}
`;
