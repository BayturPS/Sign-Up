import React from "react";
import "./App.css";
import styled from "styled-components";
import ModalCard from "./components/figma/ModalCard";
// import QueryComp from "./components/fifthTask/QueryComp";
// import Button from "./components/secondTask/Button";
// import Parent from "./components/thirdTask/Parent";
// import StyleCard from "./components/firstTask/StyleCard";
// import ConditionalColor from "./components/fourthTask/ConditionalColor";

const App = () => {
  return (
    <AppStyle>
      {/* <StyleCard /> */}
      {/* <Button /> */}
      {/* <Parent /> */}
      {/* <ConditionalColor/> */}
      {/* <QueryComp/> */}
      <ModalCard/>
    </AppStyle>
  );
};

export default App;

const AppStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`