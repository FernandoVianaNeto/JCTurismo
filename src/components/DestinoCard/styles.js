import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .container {
      background-color: ${theme.colors.primaryColor};
      width: 32rem;

      border-radius: 16px 0px 16px 0px;

      img {
        width: 32rem;
        height: 28rem;
        border-top-left-radius: 16px;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 1rem;

        .title {
          font-size: 2rem;
          color: ${theme.colors.secundaryColor};
        }

        .description {
          display: flex;
          align-items: center;
          text-align: justify;
          color: ${theme.colors.thirdColor};
        }
      }
    }
  `}
`;
