import React from "react";
import styled from "styled-components";
const StyleCard = () => {
  return (
    <Container backgroundColor="purple" width="200px" height="200px"></Container>
  );
};
export default StyleCard;

const Container = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
