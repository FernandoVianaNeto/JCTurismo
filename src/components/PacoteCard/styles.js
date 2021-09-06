import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.primaryColor};

      img {
        width: 20rem;
        height: 20rem;

        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }

      .best-seller {
        position: absolute;
        background-color: ${theme.colors.secundaryColor};
        padding: 0.5rem 1rem 0.5rem 1rem;

        text-align: center;

        top: 1;

        border-radius: 8rem;

        color: ${theme.colors.thirdColor};
      }

      .description {
        display: flex;
        text-align: left;
        flex-direction: column;

        height: 20rem;
        width: 20rem;

        margin-top: 3rem;

        background-color: ${theme.colors.primaryColor};

        .title {
          margin-bottom: 2rem;
          margin-left: 1rem;
          color: ${theme.colors.thirdColor};

          font-size: 1.8rem;
          height: 3rem;
        }

        .categoria {
          margin-left: 1rem;
          margin-top: 1rem;

          font-family: ${theme.font.family.texts};
          color: ${theme.colors.secundaryColor};
        }

        .subtitle {
          margin-left: 1rem;
          margin-top: 2rem;
          color: ${theme.colors.thirdColor};

          height: 2rem;
        }

        .price {
          margin-left: 1rem;
          color: ${theme.colors.thirdColor};

          height: 2rem;

          span {
            font-weight: bold;
            font-size: 2rem;
            color: ${theme.colors.secundaryColor};
          }
        }

        .see-more {
          margin: 2rem;
          background-color: ${theme.thirdColor};

          border: 1px solid ${theme.colors.secundaryColor};
          border-radius: 8rem;

          color: ${theme.colors.secundaryColor};

          font-family: ${theme.font.family.texts};
          font-weight: bold;
          font-size: 1.4rem;

          transition: ease-in-out all 300ms;

          cursor: pointer;

          text-decoration: none;

          text-align: center;

          &:hover {
            background-color: ${theme.colors.secundaryColor};
            color: ${theme.colors.thirdColor};
            border: 1px solid ${theme.colors.thirdColor};
          }
        }
      }
    }

    border: 2px solid ${theme.colors.thirdColor};
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;

    cursor: pointer;
    &:hover {
      border: 2px solid ${theme.colors.secundaryColor};
    }

  `}
`;
