import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 500px;
    margin: 0 auto;

    small {
      color: ${theme.colors.thirdColor};
      font-family: ${theme.font.family.texts};
    }
  `}
`;
