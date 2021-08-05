import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;

    .content {
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .column1 {
        display: flex;
        flex-direction: column;

        h1 {
          width: 100%;
          margin: 0px;
          margin-top: 5rem;
        }
      }

      .column2 {
        max-width: 50rem;
        overflow-y: auto;
        display: flex;
        align-items: center;
        gap: 1rem;

        &::-webkit-scrollbar {
          width: 3px;
        }

        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #E7E7E7;
          border-radius: 5px;
          margin: 1rem;
        }

        &::-webkit-scrollbar-thumb {
          background:  #BFBFBF;
          border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #BFBFBF;
        }
      }
    }
  `}
`;
