import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
  @media ${theme.media.lteMedium } {
    max-width: 100vw;
  }
  `}
`;

export const MenuContainer = styled.div`
  ${({theme}) => css`

  @media ${theme.media.lteMedium } {
    max-width: 100vw;
  }
  `}
`;
