import styled, { css } from 'styled-components';

export default styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    padding: 1rem;

    border-radius: 4px;
    border: 1px solid ${theme.colors.secundaryColor};

    color: ${theme.colors.thirdColor};
    font-family: ${theme.font.family.texts};

    cursor: pointer;

    width: 100%;

    transition: ease-in-out all 200ms;

    &:hover {
      background-color: ${theme.colors.thirdColor};
      color: ${theme.colors.secundaryColor};
      border: 1px solid ${theme.colors.secundaryColor};
    }

    &[disabled] {
      color: ${theme.colors.primaryColor};
      background-color: lightgray;
      border: 1px solid lightgray;

      &:hover {
        font-style: normal;
        color: ${theme.colors.primaryColor};
        cursor: default;
      }
    }

    &[type = "submit"] {
      border-radius: 4px;
      cursor: pointer;
      background-color: ${theme.colors.secundaryColor};
      border: 1px solid ${theme.colors.secundaryColor};
      color: ${theme.colors.thirdColor};

      &[disabled] {
        color: ${theme.colors.thirdColor};
        background-color: lightgray;
        border: 1px solid lightgray;

        &:hover {
          color: ${theme.colors.thirdColor};
          background-color: lightgray;
          border: 1px solid lightgray;
        }
      }

      &:hover {
        background-color: ${theme.colors.thirdColor};
        color: ${theme.colors.secundaryColor};
      }
    }
  `}
`;
