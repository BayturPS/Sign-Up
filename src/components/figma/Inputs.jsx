import React from "react";
import styled from "styled-components";
const Inputs = ({ placeholder, value, onChange, name ,type}) => {
  return (
    <StyleInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
};

export default Inputs;
const StyleInput = styled.input`
  width: 450px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 45px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  padding-left: 17px;
  &::placeholder {
    color: #767e8c;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &:focus {
    border: solid aqua;
    box-shadow: 0px 0px 15px 0.1px blue;
  }
`;
