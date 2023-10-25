import React from "react";
import styled from "styled-components";

const Component = ({error}) => {
  return (
    <div>
      <ComponentText color={error === "true" ? "green" : "red"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
        blanditiis tempore accusamus! Cupiditate nostrum deleniti cum totam
        voluptates, dignissimos quis doloribus culpa hic sit eveniet explicabo
        perferendis? Sequi, beatae. Alias?
      </ComponentText>
    </div>
  );
};

export default Component;

const ComponentText = styled.p`
  color: ${({ color }) => color};
  font-size: 30px;
`;
