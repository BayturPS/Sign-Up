import React from 'react'
import styled from 'styled-components'
const QueryComp = () => {
  return (
    <Container>
      
    </Container>
  )
}

export default QueryComp

const Container = styled.div`
background-color: red;
width: 100%;
height: 400px;
    @media (max-width: 500px) {
        background-color: green;
    }
`