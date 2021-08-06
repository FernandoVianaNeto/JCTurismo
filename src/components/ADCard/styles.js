import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .container {
      display: flex;
      height: 30rem;

      margin-top: 2rem;

      background-color: ${theme.colors.primaryColor};

      border-radius: 8px;

      .p-container {
        flex: 1;
        display: flex;
        flex-direction: column;

        width: 25rem;

        padding: 2rem;

        border-radius: 10px;
        background-color: ${theme.colors.primaryColor};


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
          color: ${theme.colors.thirdColor};
          margin-top: 3rem;
        }
      }

      img {
        flex: 1;
        max-width: 50rem;
        border-radius: 10px;
      }
    }
  `}
`;
