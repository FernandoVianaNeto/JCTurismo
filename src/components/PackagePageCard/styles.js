import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 18px;

    .content {
      display: flex;
      gap: 2rem;
      margin: 2rem;

      img {
        width: 20rem;
        height: 20rem;

        border-radius: 18px;
      }

      .details {
        font-family: ${theme.font.family.texts};
        color: ${theme.colors.primaryColor};

        display: flex;
        flex-direction: column;
        justify-content: space-around;


        .header {
          display: flex;
          gap: 2rem;
        }

        p {
          span {
            font-weight: bold;
            color: ${theme.colors.secundaryColor};
          }
        }
      }
    }

    .footer {
      text-align: right;
      margin-right: 2rem;
      margin-bottom: 2rem;

      button {
        padding: 0.5rem 3rem 0.5rem 3rem;

        border-radius: 18px;

        background-color: ${theme.colors.secundaryColor};
        border: 1px solid ${theme.colors.secundaryColor};

        color: ${theme.colors.thirdColor};

        cursor: pointer;

        font-family: ${theme.font.family.texts};

        &:hover {
          background-color: ${theme.colors.thirdColor};
          color: ${theme.colors.secundaryColor};
        }
      }
    }
  `}
`;
