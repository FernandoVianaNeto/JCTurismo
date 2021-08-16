import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    height: 100vh;

    .content {
      margin: 0 auto;
      padding-top: 3rem;

      max-width: 120rem;

      display: flex;
      flex-direction: column;
      text-align: center;

      header {
        margin-top: 7rem;
        max-width: 40rem;
        margin: 0 auto;

        .title {
          font-family: ${theme.font.family.title};
          font-weight: bold;
          font-size: 4rem;
          color: ${theme.colors.titleColor};

          border-bottom:1px solid ${theme.colors.secundaryColor};

          letter-spacing: 0.2rem;
        }
      }

      main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100rem;
        margin: 0 auto;

        background-color: blue;
        margin-top: 10rem;
        aside {
          flex: 1;
          img {
            width: 40rem;
            height: 40rem;
          }
        }

        section {
          flex: 1;
          background-color: white;
          display: flex;
          justify-content: center;
        }
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({theme}) => css`

  `}
`;
