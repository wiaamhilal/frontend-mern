import React from "react";
import styled from "styled-components";

const Paganation = () => {
  return (
    <Main className="shadow">
      <Previous className="btn btn-secondary btn-sm">previous</Previous>
      {[1, 2, 3, 4, 5].map((item) => (
        <Number className="btn btn-secondary btn-sm" key={item}>
          {item}
        </Number>
      ))}
      <Next className="btn btn-secondary btn-sm ">next page</Next>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: auto;
`;
const Previous = styled.div``;
const Number = styled.div``;
const Next = styled.div``;
export default Paganation;
