import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .details {
      display: flex;
      align-items: center;
      gap: 2rem;

      padding: 2rem;

      img {
        width: 20rem;
        height: 20rem;
      }

      p {
        font-family: ${theme.font.family.texts};
      }
    }
  `}
`;
