import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    .container {
      a {
        text-decoration: none;

        color: ${theme.colors.secundaryColor};
        font-family: ${theme.font.family.texts};

        background-color: ${theme.colors.thirdColor};

        padding: 1rem;

        /* border-radius: 8px; */
        border: 1px solid ${theme.colors.thirdColor};

        display: flex;
        align-items: center;
        gap: 0.5rem;

        transition: ease-in-out all 200ms;

        &:hover {
          background-color: ${theme.colors.secundaryColor};
          color: ${theme.colors.thirdColor};

          border: 1px solid ${theme.colors.secundaryColor};
        }
      }
    }
  `}
`;
