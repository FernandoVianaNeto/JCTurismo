import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    height: auto;
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.primaryColor};

    img {
      height: 5rem;
      width: 10rem;
    }

    .container {
      display: grid;

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


  `}
`;
