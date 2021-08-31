import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`


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
        justify-content: space-between;

        width: 100rem;
        margin: 0 auto;

        margin-top: 10rem;

        .column1 {
          img {
            width: 40rem;
            height: 40rem;

            border-radius: 18px;
          }

          p {
            font-family: ${theme.font.family.texts};
          }
        }

        .column2 {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;

          height: 100%;
          width: 50rem;

          font-family: ${theme.font.family.texts};

          h1 {
            width: 100%;
          }

          .passeio-description {
            padding: 2rem;
            background-color: lightgray;
            text-align: justify;
            border-radius: 18px;
          }
        }
      }
    }

    @media ${theme.media.lteMedium} {

      .content {


        main {

          display: flex;
          flex-direction: column;
          max-width: 100%;

          .column1 {
            img {
              width: 30rem;
              height: 30rem;
            }
          }
        }
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({theme}) => css`

  `}
`;
