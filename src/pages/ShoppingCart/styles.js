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
          border: 1px solid ${theme.colors.secundaryColor};

          .product {
            text-align: center;
            width: 26rem;
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
    }

    @media ${theme.media.lteMedium} {
      .content {
        header {
          margin-top: 10rem;
        }
      }
    }
  `}
`;
