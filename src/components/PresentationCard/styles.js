import styled, { css } from 'styled-components';

const handleBestSeller = (bestSeller) => css`
  margin-top: 0rem;
`;

export const Container = styled.div`
  ${({ theme, bestSeller }) => css`

    .content {
      display: flex;
      flex-direction: column;

      ${bestSeller && handleBestSeller(bestSeller)}

      img {
        width: 20rem;
        height: 20rem;

        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }

      .best-seller {
        position: relative;
        background-color: ${theme.colors.secundaryColor};
        padding:  0.5rem 1rem 0.5rem 1rem;

        margin-bottom: -3.5rem;
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
          margin-top: 2rem;
          margin-left: 1rem;
          color: ${theme.colors.thirdColor};

          font-size: 1.8rem;
          height: 3rem;
        }

        .subtitle {
          margin-left: 1rem;
          margin-top: 4rem;
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
          border-radius: 8px;

          color: ${theme.colors.secundaryColor};

          font-family: ${theme.font.family.texts};
          font-weight: bold;

          transition: ease-in-out all 300ms;

          cursor: pointer;

          &:hover {
            background-color: ${theme.colors.secundaryColor};
            color: ${theme.colors.thirdColor};
            border: 1px solid ${theme.colors.thirdColor};

            font-weight: bold;
          }
        }
      }
    }
  `}
`;
