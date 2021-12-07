import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    font-family: ${theme.font.family.texts};
    padding: 5px;
    width: 100%;
    min-height: 200px;
    border-radius: 4px;
  `}
`;
