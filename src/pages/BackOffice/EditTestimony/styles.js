import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 30px;

    h3 {
      padding: 0px 20px;
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.secundaryColor};
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    margin: 0 auto;
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    small {
      color: red;
      font-family: ${theme.font.family.texts};
    }
  `}
`;
