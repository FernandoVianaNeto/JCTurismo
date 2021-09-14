import styled, { css } from 'styled-components';

const handleContainerBackground = (theme) => css`
  background-color: ${theme.colors.backgroundColor};
  box-shadow: 0 0 3rem ${theme.colors.primaryColor};
`;

const handleColorBackground = (theme) => css`
  color: ${theme.colors.thirdColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 4rem;

    ${background && handleContainerBackground(theme)};


    .button {
      text-align: left;
      margin-top: -5rem;

      button {
        width: 20rem;
        padding: 1rem;
        border-radius: 20px;

        font-family: ${theme.font.family.texts};

        background-color: ${theme.colors.backgroundColor};
        color: ${theme.colors.thirdColor};
        border: 1px solid ${theme.colors.secundaryColor};

        &:hover {
          color: ${theme.colors.backgroundColor};
          background-color: ${theme.colors.thirdColor};
        }
      }
    }



    /* height: 100vh;

    padding: 5rem;


    .content {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 7rem;

      .column1 {
        display: flex;
        flex-direction: column;
        width: 100%;

        ${background && handleColorBackground(theme)};

        h1 {
          padding: 0;
          width: 100%;
          margin: 0px;
          margin-top: 5rem;
        }
      }

      .column2 {
        max-width: 100%;

        overflow: auto;
        display: flex;
        align-items: center;
        gap: 1rem;

        &::-webkit-scrollbar {
          width: 3px;
        }

        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #E7E7E7;
          border-radius: 5px;
          margin: 1rem;
        }

        &::-webkit-scrollbar-thumb {
          background:  #BFBFBF;
          border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #BFBFBF;
        }
      }
    }

    @media ${theme.media.lteMedium} {
      .content {
        display: flex;
        flex-direction: column;

        .column1 {
          margin-bottom: 2rem;
        }

        .column2 {
          display: flex;
          flex-direction: column;
        }
      }
    } */
  `}
`;
