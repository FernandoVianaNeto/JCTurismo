import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    border: 3px solid lightgray;
    padding: 0.2rem;

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    cursor: pointer;

    .inside-circle {
      background-color: lightGray;
      width: 0.5rem;
      height: 0.5rem;

      border-radius: 50%;
    }

    &:hover {
        border: 3px solid darkgray;

      .inside-circle {
        background-color: darkgray;
      }
    }
  `}
`;
