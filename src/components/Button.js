import styled, { css } from 'styled-components';

export default styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    padding: 1rem;

    border-radius: 18px;
    border: ${theme.colors.thirdColor};

    color: ${theme.colors.thirdColor};
    font-family: ${theme.font.family.texts};

    cursor: pointer;

    width: 100%;

    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.thirdColor};
    }

    &[disabled] {
      color: ${theme.colors.primaryColor};
      background-color: lightgray;
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
      }

      &:hover {
        background-color: ${theme.colors.thirdColor};
        color: ${theme.colors.secundaryColor};
      }
    }
  `}
`;
