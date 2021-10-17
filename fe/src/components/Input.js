import styled, { css } from 'styled-components';

export default styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    padding: 0 16px;

    border-radius: 4px;
    border: 1px solid ${theme.colors.backgroundColor};
  `}
`;
