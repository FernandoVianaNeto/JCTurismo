import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .container {
      display: flex;
      height: 30rem;
      width: 30rem;

      margin-top: 2rem;

      border-radius: 8px;

      img {
        flex: 1;
        max-width: 30rem;
        height: 30rem;
        border-radius: 10px;
        size: cover;
        position: absolute;
        z-index: -1;
        opacity: 0.5
      }

      .p-container {
        z-index: 1;
        flex: 1;
        display: flex;
        flex-direction: column;

        width: 30rem;

        padding: 2rem;

        border-radius: 10px;

        .title {
          font-size: 2rem;
          font-weight: bold;
          color: ${theme.colors.secundaryColor};
          background-color: ${theme.colors.thirdColor};

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8rem;
        }

        .subtitle {
          font-size: 2rem;
          font-weight: bold;
          color: ${theme.colors.secundaryColor};

          margin-top: 1rem;

          background-color: ${theme.colors.thirdColor};
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8rem;
        }

        .children {
          color: ${theme.colors.primaryColor};
          margin-top: 3rem;
        }
      }
    }
  `}
`;
