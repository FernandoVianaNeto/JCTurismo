import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .container {
      display: flex;
      height: 30rem;
      width: 70rem;

      margin-top: 2rem;

      background-color: ${theme.colors.primaryColor};

      .p-container {
        flex: 2;
        display: flex;
        flex-direction: column;

        border-radius: 10px;
        background-color: ${theme.colors.primaryColor};

        p {
          margin: 3rem;
          color: ${theme.colors.thirdColor};
          font-family: ${theme.font.family.texts};

          span {
            font-size: 2rem;
            font-weight: bold;
            color: ${theme.colors.secundaryColor};
          }
        }
      }

      img {
        flex: 4;
        max-width: 50rem;
        border-radius: 10px;
      }
    }
  `}
`;
