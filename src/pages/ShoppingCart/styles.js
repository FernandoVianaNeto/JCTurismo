import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .content {
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
          border: 1px solid ${theme.colors.secundaryColor};
          .product {
            text-align: center;
            width: 30rem;
          }

          h1 {
            padding: 2rem 10rem 2rem 10rem;
            background-color: ${theme.colors.primaryColor};

            border: 1px solid ${theme.colors.secundaryColor};
            color: ${theme.colors.secundaryColor};

            font-family: ${theme.font.family.texts};
            font-size: 1.7rem;
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
