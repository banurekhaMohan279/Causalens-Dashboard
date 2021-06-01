import styled from "styled-components";

const narrowScreen =
  "only screen and (max-width: 750px) and (min-width: 300px)";

export const GridTile = styled.div`
  width: 15em;
  height: 13.5em;
  background: #252b42;
  margin: 1%;

  @media ${narrowScreen} {
    width: 50em;
  }
`;

export const GridBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
