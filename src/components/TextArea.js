import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    font-family: ${theme.font.family.texts};
    padding: 5px;
  `}
`;
