import React from "react";
import styled from "styled-components";
import GoogleIcon from "../assets/icons/free-icon-google-symbol-2875404 1.png";

const GoogleBtn = () => {
  const alertFunc = () => {
    alert("Нету google аккаунта")
  }
  return (
    <Google onClick={alertFunc}>
      <img src={GoogleIcon} alt="Google Icon" />
      Войти через Google
    </Google>
  );
};

export default GoogleBtn;

const Google = styled.button`
  width: 450px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;
