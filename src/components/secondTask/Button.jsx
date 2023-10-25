import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyleButton></StyleButton>;
};

export default Button;
const StyleButton = styled.button`
  width: 170px;
  height: 170px;
  margin: 20px;
  transition: 0.3s;
  &:active {
    background-color: blue;
  }
  &:hover {
    width: 200px;
    height: 200px;
    border-radius: 30px;
  }
`;
