import React, { useState } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import GoogleBtn from "./GoogleBtn";
import SignUp from "./SignUp";

const ModalCard = () => {
  const [inputsValue, setInputsValue] = useState("");
  const [password, setPassword] = useState("");

  const onCheck = (e) => {
    if (e.target.name === "login") {
      setInputsValue(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const logInHandler = (e) => {
    e.preventDefault();
    if (inputsValue === "") {
      alert("Поле не должно быть пустым");
    }
    if (password.length < 8) {
      alert("Пароль должен содержать 8 символов");
    }else if(inputsValue.length>1 || password.length>8){
      alert(`Log In : ${inputsValue} Password : ${password}`)
    }
  };

  // console.log(inputsValue);
  // console.log(password);

  return (
    <Modal>
      <HeadingText>Вход в аккаунт</HeadingText>
      <Form onSubmit={logInHandler}>
        <Inputs
          placeholder="Логин"
          type="text"
          value={inputsValue}
          onChange={onCheck}
          name="login"
        />
        <Inputs
          placeholder="Пароль"
          type="password"   
          name="password"
          onChange={onCheck}
          value={password}
        />
        <OrText>Или</OrText>
        <GoogleBtn />
        <SignUp type="submit" disabled={password.length < 8 || !inputsValue} />
      </Form>
    </Modal>
  );
};

export default ModalCard;

const Modal = styled.div`
  margin-top: 25px;
  width: 582px;
  height: 693px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingText = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 71px;
  margin-bottom: 55px;
`;

const OrText = styled.h3`
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 24px;
`;
