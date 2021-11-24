import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
  `}
`;

export const DestinationsContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-around;
    margin: 50px;

    width: 100%;
  `}
`;

export const DestinyCard = styled.table`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    min-height: 50px;
    width: 100%;

    border: 1px solid ${theme.colors.primaryColor};

    font-family: ${theme.font.family.texts};

    padding: 10px;

    p {
      text-align: justify;
    }

    span {
      color: ${theme.colors.secundaryColor};
    }

    img {
      border-radius: 4px;
      max-width: 200px;
      max-height: 200px;
    }

    tbody {
      width: 100%;
    }

    .imagem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      margin-right: 20px;
    }

    .description {
      width: 500px;
    }

    .title {
      margin-right: 20px;
      width: 200px;
    }

    .op {
      width: 100px;
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    a, button {
      border: 0;
      background: transparent;
      font-family: ${theme.font.family.texts};
      font-size: 16px;
      cursor: pointer;
      color: ${theme.colors.backgroundColor};
      transition: ease-in-out all 300ms;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.secundaryColor};
    width: 100%;

    h1 {
      font-family: ${theme.font.family.texts};
    }

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

export const BigGroup = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const Group = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    margin: 0px 40px;
  `}
`;

export const SmallGroup = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 25px;
    padding: 30px;
    min-width: 500px;
    margin: 15px;

    background-color: ${theme.colors.backgroundColor};

    border-radius: 6px;

    div {
      width: 100%;
    }

    h1 {
      color: ${theme.colors.thirdColor};
      font-family: ${theme.font.family.texts};
    }

    h3 {
      color: ${theme.colors.thirdColor};
      font-family: ${theme.font.family.texts};
    }

    small {
      color: ${theme.colors.thirdColor};
      font-family: ${theme.font.family.texts};
    }
  `}
`;
