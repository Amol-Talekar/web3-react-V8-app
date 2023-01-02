import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 50vw;
  margin: auto;
  padding: 12px;
  border: 2px dotted gray;
  border-radius: 8px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h3 {
    text-align: center;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  h2 {
    min-width: 150px;
  }
  span {
    font-size: 22px;
  }
`;
