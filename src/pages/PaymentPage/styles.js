import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const BigGroup = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  `}
`;

export const Group = styled.div`
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

export const FlexDiv = styled.div`
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

export const ModalContainer = styled.div`
  ${() => css`


  `}
`;
