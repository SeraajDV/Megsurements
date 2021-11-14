import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import Results from './Results'

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media (max-width: 1100px) {
   flex-direction: column;
 }
`;
const Layout = () => {
  const [amount, setAmount] = useState(null)
  const [results, setResults] = useState(0)

  return (
    <Container>
      <Form amount={amount} handleSetAmount={setAmount} handleSetResults={setResults}  />
      <Results amount={amount} results={results} />
    </Container>
  )
}

export default Layout
