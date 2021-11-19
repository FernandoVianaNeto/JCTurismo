import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  `}
`;

export const SmallGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${theme.colors.secundaryColor};

    input {
      padding: 5px 16px;
      border: 1px solid ${theme.colors.secundaryColor};
      border-radius: 4px;
      background-color: ${theme.colors.thirdColor};
      color: ${theme.colors.backgroundColor};
      height: 20px;
      width: 300px;
      font-style: italic;
      &:focus {
        outline: none;
      }
    }
  `}
`;

export const Group = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 2rem;

    h1 {
      color: ${theme.colors.primaryColor};
      font-family: ${theme.font.family.texts};


    }

    @media ${theme.media.lteMedium} {
      .content {
        margin: 0;
        padding: 2rem;

        h1 {
          margin-top: 10rem;
        }
      }
    }
  `}
`;
