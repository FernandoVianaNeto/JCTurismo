import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      position: fixed;
      bottom: 2rem;
      color: white;
      background-color: green;
      padding: 0.6rem;

      border-radius: 8rem;

      margin-left: 3rem;
    }
  `}
`;
