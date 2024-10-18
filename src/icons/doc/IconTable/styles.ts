import styled from 'styled-components';

export const Container = styled.div`
  .t-icon-table-search {
    max-width: min(100%, 300px);
    margin-left: auto;
    margin-bottom: 2rem;
  }

  .t-icon-table-icons {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px 10px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .t-icon-table-item {
      display: flex;
      gap: 4px;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .t-icon-table-icon {
        width: 100%;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow:
          0 1px 3px #0000001a,
          0 1px 2px #0000000f;
      }
    }
  }
`;
