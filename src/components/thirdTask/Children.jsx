import React from "react";
import styled from "styled-components";
const Children = ({ bgColor }) => {
  return <Child bgColor={bgColor}>Child </Child>;
};
export default Children;

const Child = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px;
  border-radius: 5px;
`;
