import styled, { css } from 'styled-components';

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

    h1 {
      color: ${theme.colors.thirdColor};
      font-family: ${theme.font.family.texts};
    }
  `}
`;
