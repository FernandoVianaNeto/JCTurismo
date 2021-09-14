import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, bestSeller, background }) => css`
    /* border: 2px solid ${theme.colors.thirdColor};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;

    cursor: pointer; */

    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      align-items: center;
      gap: 5rem;
    }

    h1 {
      color: ${theme.colors.secundaryColor};
      font-family: ${theme.font.family.texts};
    }

    img {
      width: 25rem;
      border-radius: 20px;
    }

    .btn-container {
      text-align: right;
    }

    button {

      width: 30rem;
    }

    .smallDescription-container {
      p {
        color: ${theme.colors.thirdColor};
      }
    }

    /* .content {
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.primaryColor};

      img {
        width: 20rem;
        height: 20rem;

        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
      }

      .best-seller {
        background-color: ${theme.colors.secundaryColor};
        padding: 0.5rem 1rem 0.5rem 1rem;

        text-align: center;

        border-radius: 8rem;

        color: ${theme.colors.thirdColor};
      }

      .description {
        display: flex;
        text-align: left;
        flex-direction: column;

        height: 20rem;
        width: 20rem;

        background-color: ${theme.colors.primaryColor};

        .title {
          margin-bottom: 2rem;
          color: ${theme.colors.thirdColor};

          font-size: 1.8rem;
          height: 3rem;
        }

        p {
          margin-left: 1rem;
        }

        .categoria {
          font-family: ${theme.font.family.texts};
          color: ${theme.colors.secundaryColor};
        }

        .subtitle {
          margin-top: 4rem;
          color: ${theme.colors.thirdColor};

          height: 2rem;
        }

        .price {
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

    &:hover {
      border: 2px solid ${theme.colors.secundaryColor};
    } */

  `}
`;
