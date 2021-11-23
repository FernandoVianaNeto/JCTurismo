import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    min-height: 100vh;
    width: 100%;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-width: 200px;
    height: 100vh;
    background-color: ${theme.colors.backgroundColor};

    small {
      font-family: ${theme.font.family.texts};
      font-size: 8px;
      color: ${theme.colors.secundaryColor};
    }

    img {
      width: 100px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: ${theme.font.family.texts};
      color: ${theme.colors.secundaryColor};
      margin: 5px;
      background-color: transparent;
      border: 0;

      cursor: pointer;
      text-decoration: none;
    }

  `}
`;

export const Section = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    position: relative;
    width: 100%;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
  `}
`;

export const Footer = styled.footer`
  ${() => css`

  `}
`;
