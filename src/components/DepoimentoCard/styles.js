import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;

    gap: 30px;

    background-color: lightgray;
    max-width: 250px;

    padding: 25px;

    h3 {
      color: ${theme.colors.secundaryColor};
    }

  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align
    min-height: 50px;

    .name {
      color: ${theme.colors.secundaryColor}
    }
  `}
`;
