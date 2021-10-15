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
  `}
`;
