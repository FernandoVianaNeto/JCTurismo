import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const BigGroup = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Group = styled.div`
  ${() => css`
    .emailError {
      color: red;
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`

    max-width: 500px;
    margin: 0 auto;

  `}
`;
