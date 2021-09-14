import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .content {
      display: flex;
      gap: 2rem;

      img {
        flex: 1;
        height: 40rem;

        border-radius: 18px;
      }

      .details {
        flex: 1;
        font-family: ${theme.font.family.texts};
        color: ${theme.colors.primaryColor};

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .header {
          display: flex;
          flex-direction: column;

          .title {
            font-size: 3rem;
            color: ${theme.colors.secundaryColor};
          }

          p {
            color: ${theme.colors.backgroundColor};
          }
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
      text-align: left;
      margin-right: 2rem;
      margin-bottom: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        padding: 0.5rem 3rem 0.5rem 3rem;

        background-color: ${theme.colors.thirdColor};
        border: 1px solid ${theme.colors.secundaryColor};

        color: ${theme.colors.secundaryColor};

        cursor: pointer;

        font-family: ${theme.font.family.texts};

        transition: ease-out all 300ms;

        &:hover {
          background-color: ${theme.colors.secundaryColor};
          color: ${theme.colors.thirdColor};
        }
      }
    }

    @media ${theme.media.lteMedium} {
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .details {
          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          p {
            margin-top: 1rem;
          }
        }


      }
      .footer {
          text-align: center;
          margin: 0;
          margin-bottom: 2rem;
        }
    }
  `}
`;
