import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .content {
      display: flex;
      gap: 2rem;

      img {
        flex: 1;
        height: 46rem;
        max-width: 55rem;

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
        }

        .description {
          display: flex;
          align-items: center;
          height: 35rem;
        }

        p {
          color: ${theme.colors.backgroundColor};
          span {
            font-weight: bold;
            color: ${theme.colors.secundaryColor};
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
      }
    }


  }

    @media ${theme.media.lteMedium} {
      img {
        max-height: 40rem;
        max-width: 45rem;
        border-radius: 18px;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .details {
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .description {
            margin: 2rem 0rem 2rem 0rem;
            height: auto;
            text-align: justify;
          }

          .footer {
            display: flex;
            justify-content: space-between;
            text-align: center;
            margin: 0;
            margin-bottom: 2rem;
          }
        }


      }

    }
  `}
`;
