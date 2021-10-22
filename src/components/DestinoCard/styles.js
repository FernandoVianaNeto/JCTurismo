import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .container {
      background-color: ${theme.colors.primaryColor};
      width: 32rem;

      border-radius: 32px 0px 32px 0px;

      img {
        width: 32rem;
        height: 28rem;
        border-top-left-radius: 32px;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 2rem;

        .title {
          font-size: 2rem;
          color: ${theme.colors.secundaryColor};
          margin: 0;
        }

        .description {
          display: flex;
          align-items: center;
          text-align: justify;
          justify-content: center;
          color: ${theme.colors.thirdColor};

          height: 10rem;
          padding: 0;
        }

        button {
          width: 100%;

          background-color: ${theme.colors.secundaryColor};
          color: ${theme.colors.thirdColor};
          padding: 0.5rem;

          border: none;
          border-radius: 8px;

          letter-spacing: 0.02em;

          font-family: ${theme.font.family.texts};

          transition: ease-in-out all 300ms;

          cursor: pointer;

          &:hover {
            background-color: ${theme.colors.thirdColor};
            color: ${theme.colors.secundaryColor};
            font-weight: bold;
          }
        }
      }
    }
  `}
`;
