import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    min-height: 100vh;
    display: flex;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
    }
  `}
`;
