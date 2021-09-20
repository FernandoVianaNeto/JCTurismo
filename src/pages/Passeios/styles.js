import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    .destinos {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      padding: 3rem;
    }
  `}
`;
