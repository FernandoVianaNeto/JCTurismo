import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.backgroundColor};

    padding: 0px 4px;

    font-family: ${theme.font.family.texts};

    cursor: pointer;

    &:focus {
      outline: none;
    }
  `}
`;
