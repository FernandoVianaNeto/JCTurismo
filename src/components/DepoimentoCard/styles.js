import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    border-radius: 4px;

    gap: 30px;

    background-color: lightgray;
    max-width: 250px;

    padding: 25px;
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    .name {
      color: ${theme.colors.secundaryColor}
    }
  `}
`;
