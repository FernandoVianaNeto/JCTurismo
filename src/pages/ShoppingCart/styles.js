import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .content {


      footer {

    }

    @media ${theme.media.lteMedium} {

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

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem;

    @media ${theme.media.lteMedium} {
      .content {
        width: 100vw;
        padding: 2rem 0rem 0rem 0rem;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    h1 {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.primaryColor};

      border-bottom: 1px solid ${theme.colors.secundaryColor};

      @media ${theme.media.lteMedium} {
        header   {
          padding: 0;
          margin: 10rem 2rem 2rem 2rem;

          h1 {
            padding: 0;
          }
        }
      }
    }
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 3rem;
    .products-container {
      display: flex;
      flex-direction: column;

      .products {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h4 {
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.secundaryColor};
        }
      }

      .title-container {
        display: flex;


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
      @media ${theme.media.lteMedium} {
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

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;

    .subtotal {
      display: flex;
      flex-direction: column;

      text-align: right;
      padding: 2rem;

      font-family: ${theme.font.family.texts};

      h3 {
        color: ${theme.colors.primaryColor};

        span {
          color: ${theme.colors.secundaryColor};
        }
      }

      button {
        margin-top: 3rem;
        background-color: ${theme.colors.secundaryColor};

        padding: 1rem 0rem 1rem 0rem;
        border: 1px solid ${theme.colors.secundaryColor};
        border-radius:  18px;

        cursor: pointer;
        color: ${theme.colors.thirdColor};

        font-family: ${theme.font.family.texts};

        &:hover {
          background-color: ${theme.colors.thirdColor};
          color: ${theme.colors.secundaryColor};
        }
      }
    }
  `}
`;
