import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .content {
      margin: 2rem;

      h1 {
        color: ${theme.colors.primaryColor};
        font-family: ${theme.font.family.texts};

        border-bottom: 1px solid ${theme.colors.secundaryColor};
      }
    }
  `}
`;
