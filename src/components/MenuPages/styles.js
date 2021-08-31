import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`

    .content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;

      background-color: ${theme.colors.primaryColor};

      padding: 0.5rem 5rem 0.5rem 5rem;

      box-shadow: 0 0 2rem ${theme.colors.primaryColor};

      img {
        width: 15rem;
        height: 8rem;
      }

      .btn-container{
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
    }

  `}
`;
