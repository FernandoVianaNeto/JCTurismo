import styled, { css } from 'styled-components';

const handleBestSeller = (bestSeller) => css`
  margin-top: 0rem;
`;

const handleBackground = (theme) => css`
  background-color: ${theme.colors.thirdColor};
`;

const colorBackground = (theme) => css`
  color: ${theme.colors.primaryColor};
`;


export const Container = styled.div`
  ${({ theme, bestSeller, background }) => css`
    border: 2px solid ${theme.colors.thirdColor};

    cursor: pointer;

    .content {
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.primaryColor};

      ${bestSeller && handleBestSeller(bestSeller)}

      img {
        width: 20rem;
        height: 20rem;
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
        ${background && handleBackground(theme)};

        .title {
          margin-bottom: 2rem;
          margin-left: 1rem;
          color: ${theme.colors.thirdColor};

          ${background && colorBackground(theme)};

          font-size: 1.8rem;
          height: 3rem;
        }

        .subtitle {
          margin-left: 1rem;
          margin-top: 4rem;
          color: ${theme.colors.thirdColor};

          ${background && colorBackground(theme)}

          height: 2rem;
        }

        .price {
          margin-left: 1rem;
          color: ${theme.colors.thirdColor};

          ${background && colorBackground(theme)}

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
    }

  `}
`;
