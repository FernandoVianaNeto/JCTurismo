import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .content {
      max-width: 120rem;
      margin: 0 auto;
      padding: 2rem;

      header {
        h1 {
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.primaryColor};

          border-bottom: 1px solid ${theme.colors.secundaryColor};
        }
      }

      main {
        margin-top: 3rem;

        .products-container {
          display: flex;
          flex-direction: column;

          .products {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .title-container {
            display: flex;

            .price {

            }

            .amount {

            }

            .total {
              text-align: center;
              width: 14.05rem;
            }

            h1 {
              padding: 2rem 8rem 2rem 8rem;
              background-color: ${theme.colors.primaryColor};

              border: 1px solid ${theme.colors.secundaryColor};
              color: ${theme.colors.secundaryColor};

              font-family: ${theme.font.family.texts};
              font-size: 1.7rem;
            }
          }
        }
      }

      footer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 10rem;

        width: 100%;

        .subtotal {
          display: flex;
          flex-direction: column;
          width: 30rem;
          height: 40rem;
        }
      }
    }

    @media ${theme.media.lteMedium} {
      .content {
        width: 100vw;
        padding: 2rem 0rem 0rem 0rem;

        header   {
          padding: 0;
          margin: 10rem 2rem 2rem 2rem;

          h1 {
            padding: 0;
          }
        }

        main {
          margin: 2rem;
          border: none;

          .products-container {
            margin: 0;
          }

          .products {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            border: none;
          }

          .title-container {
            visibility: hidden;
            position: absolute;
            border: none;

            h1 {
              border: none;
            }
          }
        }
      }
    }
  `}
`;
