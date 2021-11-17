import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 50vw;
    margin: 0 auto;
  `}
`;

export const ModalContainer = styled.div`
  ${() => css`

  `}
`;

export const SmallGroup = styled.div`
  ${({ theme }) => css`
    small {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.secundaryColor};
    }

    .emailError {
      color: red;
    }
  `}
`;

export const CheckGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    small {
      font-family: ${theme.font.family.texts};
      color: ${theme.colors.secundaryColor};
    }
  `}
`;
