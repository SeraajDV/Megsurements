import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  padding-top: 50px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  @media (max-width: 1100px) {
   align-self: center;
   margin-right: 50px;
 }
`;

const Input = styled.input`
  margin-top: 10px;
  width: 500px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 20px;

  &:focus {
    outline: none;

  }

  @media (max-width: 1100px) {
   width: 70vw;
   align-self: center;
   margin-right: 50px;
 }
`;


const Button = styled.button`
  margin-top: 30px;
  width: 530px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  background: black;
  color: white;
  transition: all .2s ease-in-out;

  &:hover {
    color: #cbb3f2;
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
   width: 70vw;
   align-self: center;
   margin-right: 50px;
 }
`;

const Form = ({amount, handleSetAmount, handleSetResults}) => {
  const handleConvertFToC = (e) => {
    e.preventDefault();
    const c = ((amount - 32.0) * 5.0/9.0).toFixed(2);
    handleSetResults(c)
  }
  return (
    <Container>
      <Label>Amount</Label>
      <Input type="number" placeholder="How much you want to convert?" value={amount} onChange={e => handleSetAmount(e.target.value)} />
      <Button onClick={handleConvertFToC}>Convert now</Button>
    </Container>
  )
}

export default Form
