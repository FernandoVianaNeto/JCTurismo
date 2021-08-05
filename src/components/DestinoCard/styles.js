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
          height: 2rem;


          border: none;
        }
      }
    }
  `}
`;
