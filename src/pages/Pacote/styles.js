import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    h1 {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.primaryColor};
      text-align: center;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 30rem;
        height: 30rem;

        border-radius: 18px;
      }

      section {
        flex: 3;
      }

      aside {
        flex: 2;
      }
    }
  `}
`;
