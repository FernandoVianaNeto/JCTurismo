import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .description {
      display: flex;
      align-items: center;
      height: 35rem;
    }

    @media ${theme.media.lteMedium} {
      .description {
        margin: 2rem 0rem 2rem 0rem;
        height: auto;
        text-align: justify;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;

    img {
      flex: 1;
      height: 46rem;
      max-width: 55rem;

      border-radius: 18px;
    }

    @media ${theme.media.lteMedium} {
      img {
        max-height: 40rem;
        max-width: 45rem;
        border-radius: 18px;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.font.family.texts};
    color: ${theme.colors.primaryColor};

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      color: ${theme.colors.backgroundColor};
      span {
        font-weight: bold;
        color: ${theme.colors.secundaryColor};
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    .title {
      font-size: 3rem;
      color: ${theme.colors.secundaryColor};
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`

    text-align: left;
    margin-right: 2rem;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 5px 16px;

      background-color: ${theme.colors.thirdColor};
      border: 1px solid ${theme.colors.secundaryColor};

      cursor: pointer;

      font-family: ${theme.font.family.texts};
      font-size: 14px;
      color: ${theme.colors.secundaryColor};
      text-decoration: none;
      transition: ease-out all 300ms;

      &:hover {
        background-color: ${theme.colors.secundaryColor};
        color: ${theme.colors.thirdColor};
      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin: 0;
      margin-bottom: 2rem;
    }
  `}
`;
