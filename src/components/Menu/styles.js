import styled, { css } from 'styled-components';

const setBackground = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  box-shadow: 0 0 2rem ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({theme, background}) => css`
    height: auto;
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.thirdColor};

    ${background && setBackground(theme)};

    img {
      height: 5rem;
      width: 10rem;
    }

    .container {
      display: flex;
      flex-direction: column;

      .show-options {
        visibility: hidden;
        position: absolute;
      }

      .flex-left {
        text-align: right;

        .phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: ${theme.font.family.texts};

          color: ${theme.colors.secundaryColor};
        }
      }

      .flex-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;

        .btn-container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      }
    }

    @media ${theme.media.lteMedium} {
      padding: 0;
      position: fixed;
      width: 100%;
      z-index:100;

      .container {
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.primaryColor};

        padding: 2rem 1rem 2rem 2rem;

        .flex-left {
          text-align: center;
        }

        .flex-right {
          display: flex;
          flex-direction: column;

          img {
            visibility: hidden;
            position: absolute;
            gap: 1rem;
          }

          .btn-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: left;
          }
        }


        .show-options {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1rem;
          margin-bottom: 1rem;

          visibility: visible;
          position: relative;

          background-color: transparent;
          border: none;
          color: white;
        }
      }
    }
  `}
`;
