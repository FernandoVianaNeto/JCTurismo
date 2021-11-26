import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  `}
`;

export const DepoimentoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    gap: 30px;

    background-color: lightgray;

    max-width: 250px;
    max-height: 350px;
    padding: 25px;

    h3 {
      color: ${theme.colors.secundaryColor};
    }

    i {
      min-height: 100px;
    }

  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 50px;

    .name {
      color: ${theme.colors.secundaryColor}
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;

    h1 {
      color: ${theme.colors.secundaryColor};
      font-family: ${theme.font.family.texts};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    min-height: 50px;
    margin-top: 20px;
    width: 100%;

    button {
      background-color: transparent;
      border:none;
      color: ${theme.colors.backgroundColor};
      font-size: 16px;

      cursor: pointer;
    }

    a {
      color: ${theme.colors.backgroundColor};
    }
  `}
`;

export const ButtonContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    margin-top: 20px;
    padding: 0px 20px;

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: space-between;

      border: 2px solid ${theme.colors.secundaryColor};
      border-radius: 4px;

      background: ${theme.colors.secundaryColor};
      padding: 5px;

      font-family: ${theme.font.family.texts};
      font-size: 16px;
      color: ${theme.colors.thirdColor};

      cursor: pointer;

      transition: ease-in-out all 300ms;

      &:hover {
        border: 2px solid ${theme.colors.secundaryColor};
        color: ${theme.colors.secundaryColor};
        background-color: ${theme.colors.thirdColor};
      }
    }
  `}
`;

export const TestimonysContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    padding: 20px;

    font-family: ${theme.font.family.texts};
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    margin: 0 auto;
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    small {
      color: red;
      font-family: ${theme.font.family.texts};
    }
  `}
`;

export const HeaderGroup = styled.div`
  ${({ theme }) => css`
      min-width: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      input {
        font-family: ${theme.font.family.texts};
        height: 35px;
        border: 1px solid ${theme.colors.backgroundColor};
        border-radius: 4px;
        padding: 0px 16px;
      }
  `}
`;
