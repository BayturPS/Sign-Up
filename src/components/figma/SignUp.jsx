import React from "react";
import styled from "styled-components";

const SignUp = ({ onClick, type = "button", disabled }) => {

  return (
    <SignUpBtn onClick={onClick} type={type}>
      Вход
    </SignUpBtn>
  );
};

export default SignUp;

const SignUpBtn = styled.button`
  width: 450px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? "gray" : "linear-gradient(180deg, #000 0%, #000 100%)"};
  color: white;
  margin-top: 68px;
`;
