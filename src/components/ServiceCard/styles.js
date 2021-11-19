import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    max-width: 30rem;

    padding: 2rem;

    background-color: ${theme.colors.backgroundColor};

    color: ${theme.colors.thirdColor};

    h2 {
      color: ${theme.colors.secundaryColor};
    }

    p {
      color: ${theme.colors.thirdColor};
    }

    img {
      width: 70px;
    }
  `}
`;

export const LeftColumn = styled.div`
  ${() => css`
    background-color: lightgray;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
  `}
`;

export const RightColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 2;
    height: 100%;

    a {
      margin-top: 2rem;
      text-align: right;

      cursor: pointer;

      color: ${theme.colors.secundaryColor};

      &:hover {
        color: ${theme.colors.thirdColor};
      }
    }
  `}
`;
