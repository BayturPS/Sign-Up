import styled from "styled-components";
import Children from "./Children";

const Parent = () => {
  return (
    <Container>
      <ParentText>Parent</ParentText>
      <Children bgColor="green" />
    </Container>
  );
};

export default Parent;
const Container = styled.div`
  background-color: black;
  padding: 20px;
`;
const ParentText = styled.p`
  color: green;
`;
