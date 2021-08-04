import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`

    .container {
      a {
        text-decoration: none;

        color: ${theme.colors.thirdColor};
        font-family: ${theme.font.family.texts};

        background-color: ${theme.colors.primaryColor};

        padding: 1rem;

        border-radius: 8px;
        border: 1px solid ${theme.colors.primaryColor};

        display: flex;
        align-items: center;
        gap: 0.5rem;

        transition: ease-in-out all 200ms;

        &:hover {
          background-color: ${theme.colors.thirdColor};
          color: ${theme.colors.primaryColor};
        }
      }
    }
  `}
`;
