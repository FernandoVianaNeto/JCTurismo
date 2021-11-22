import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;

    width: 500px;
    height: 100vh;
    margin: 0 auto;
  `}
`;
