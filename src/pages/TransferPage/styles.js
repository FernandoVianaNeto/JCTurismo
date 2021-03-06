import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const BigGroup = styled.div`
  ${() => css`
    display: flex;
    gap: 30px;
  `}
`;

export const Group = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .emailError {
      color: red;
    }
  `}
`;

export const FormContainer = styled.div`
  ${() => css`
    margin: 0 auto;

  `}
`;
