import React from "react";
import styled from "styled-components";
// styled-components를 사용한 스타일
const ContentDiv = styled.div`
  margin: 40px;
`;
// props에 따른 조건부 스타일
const ContentH2 = styled.h2`
  color: ${(props) => (props.name === "hello" ? "red" : "black")};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </ContentDiv>
  );
};

export default App;
