import styled, { css } from 'styled-components';

const handleContainerBackground = (theme) => css`
  background-color: ${theme.colors.thirdColor};
  box-shadow: 0 0 3rem ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
  z-index: -1;
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

        background-color: ${theme.colors.thirdColor};
        color: ${theme.colors.backgroundColor};
        border: 1px solid ${theme.colors.secundaryColor};

        cursor: pointer;

        &:hover {
          color: ${theme.colors.thirdColor};
          background-color: ${theme.colors.backgroundColor};
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
    }
  `}
`;
