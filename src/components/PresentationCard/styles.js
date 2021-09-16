import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, bestSeller, background }) => css`
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      align-items: center;
      gap: 5rem;
    }

    h1 {
      color: ${theme.colors.secundaryColor};
      font-family: ${theme.font.family.texts};
    }

    img {
      width: 25rem;
      border-radius: 20px;
    }

    .btn-container {
      text-align: right;
    }

    button {
      width: 30rem;
    }

    .smallDescription-container {
      p {
        color: ${theme.colors.backgroundColor};
      }
    }
  `}
`;
