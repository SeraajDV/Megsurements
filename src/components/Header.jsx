import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Princess Sofia', cursive;
  font-weight: bold;
  color: white;
  padding-left: 50px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5)
`;
const Header = () => {
  return (
    <Container>
      <Title>Megrees</Title>
    </Container>
  )
}

export default Header;
