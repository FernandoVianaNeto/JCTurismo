import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${theme.colors.primaryColor};

    position: absolute;
    bottom: 0;

    padding: 1rem 0rem 1rem 0rem;
    width: 100%;

    img {
      width: 12rem;
    }

    .contacts {
      display: flex;
      align-items: center;
      gap: 1rem;

      color: white;
      font-family: ${theme.font.family.texts};

      button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;

        color: white;
        font-size: 2rem;
        cursor: pointer;
      }
    }

  `}
`;
