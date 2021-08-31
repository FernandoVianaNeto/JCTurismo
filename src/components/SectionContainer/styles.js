import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    max-width: 120rem;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
    }
  `}
`;
