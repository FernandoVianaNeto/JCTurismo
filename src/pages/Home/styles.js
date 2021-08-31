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
            padding: 1rem;

            background-color: ${theme.colors.thirdColor};
            color: ${theme.colors.secundaryColor};

            font-size: 1.7rem;
            font-family: ${theme.font.family.texts};
            font-weight: bold;
            letter-spacing: 0.05em;

            border-radius: 8px;
            border: 1px solid ${theme.colors.secundaryColor};

            cursor: pointer;

            transition: ease-in-out all 300ms;

            text-decoration: none;

            &:hover {
              background-color: ${theme.colors.secundaryColor};
              color: ${theme.colors.thirdColor};
              border: 1px solid ${theme.colors.thirdColor};

              font-weight: bold;
            }
          }
        }
      }

      main {
        .ad-container {
          padding: 5rem;
          flex-direction: column;

          border-bottom: 1px solid lightgray;

          max-width: 120rem;
          margin: auto;

          h1 {
            color: ${theme.colors.primaryColor};
          }

          .option-container {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            max-width: 120rem;
            overflow-x: auto;

            .children {
              display: flex;
              flex-direction: column;

              button {
                margin-top: 2rem;
                border-radius: 8rem;

                border: 0;
                padding: 0.5rem 0rem 0.5rem 0rem ;

                color: ${theme.colors.secundaryColor};
                border: 1px solid ${theme.colors.secundaryColor};

                font-weight: bold;

                cursor: pointer;

                &:hover {
                  border: 1px solid ${theme.colors.thirdColor};
                  background-color: ${theme.colors.secundaryColor};
                  color: ${theme.colors.thirdColor};
                }
              }

              .children-desconto {
                font-size: 1rem;
              }
            }

            .options {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 70rem;
              gap: 1rem;
            }
          }
        }
      }
    }

    @media ${theme.media.lteMedium} {
      .content {
        header {
          .title-container {
            .title {
              font-size: 4rem;
            }
          }
        }
      }
    }
  `}
`;
