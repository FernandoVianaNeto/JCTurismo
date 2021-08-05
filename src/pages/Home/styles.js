import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .image-background {
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .content {
      z-index: 1;
      font-family: ${theme.font.family.texts};

      main {
        padding: 5rem;

        .title {
          font-size: 5rem;
          color: ${theme.colors.thirdColor};

          margin-bottom: 5rem;

          span {
            font-weight: bold;
            color: ${theme.colors.secundaryColor};
          }
        }

        .destiny-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 5rem;
        }
      }
    }
  `}
`;
