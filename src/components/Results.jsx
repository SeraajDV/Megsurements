import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  padding-top: 50px;

  @media (max-width: 1100px) {
   background: black;
   width: 100%;
   margin-top: 50px;
   flex-direction: row;
   justify-content: space-around;
   flex: 1;
 }
`;

const Logo = styled.h1`
  background-color: #b3bbf2;
  background-image: linear-gradient(180deg, #b3bbf2 0%, #cbb3f2 50%, #ebb3f2 100%);
  color: #fff;
  font-family: 'Princess Sofia', cursive;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 50%;
  font-size: 3rem;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;

  @media (max-width: 1100px) {
   display: none;
 }
`;

const Result = styled.p`
  font-family: 'Princess Sofia', cursive;
  color: ${props => props.color|| "#b3bbf2"};
  font-size: 3em;
  margin: 0;
  align-self: flex-end;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #b3b3b3;
  align-self: flex-end;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
   display: none;
 }
`;
const Results = ({amount, results}) => {
  return (
    <Container>
      <Logo>M</Logo>
      <Result>{amount} ° F</Result>
      <Label>Fahrenhit</Label>
      <Result color="#ebb3f2 ">{results} °C</Result>
      <Label>Celsius</Label>
    </Container>
  )
}

export default Results
