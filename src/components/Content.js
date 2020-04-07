import React from "react";
import styled from "styled-components/macro";

const StyledContentWrap = styled.div`
  grid-area: content;
  border: 1px solid red;
  width: 100%;
  /* height: 100%; */
  /* overflow-y: auto; */

  /* margin-top: 55px; */
`;

const MovieListItem = styled.div`
  min-width: 350px;
  width: 350px;
  height: 150px;
  max-width: 400px;
  margin: 10px;
  background: lightgray;
`;

export default function Content({ props }) {
  return (
    <StyledContentWrap>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
        return <MovieListItem key={item} />;
      })}
    </StyledContentWrap>
  );
}
