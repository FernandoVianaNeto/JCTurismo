import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`

    .content {
      margin: 5rem;
      h1 {
        font-family: ${theme.font.family.texts};
        color: ${theme.colors.titleColor};

        border-bottom: 1px solid ${theme.colors.secundaryColor};

        text-align: center;

        width: 15rem;

        margin: 0 auto;
      }
    }
  `}
`;
