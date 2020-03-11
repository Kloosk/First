import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 30vw;
    transition: transform 1s ease-in-out;
    transform: translateX(0);
    padding: 50px 40px 20px 40px;
    background-color: white;
    color: black;
    z-index: 99;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
   }
`;
const Close = styled.div`
  cursor:pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2.5rem;
`;
const P = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
const Btn = styled.button`
margin-top: 10px;
border: 1px solid black;
outline: none;
padding: 10px 40px;
background-color: white;
color: black;
cursor: pointer;
  &:hover{
  background-color: whitesmoke;
  }
`;

function LastVisit() {
    const [styling,setStyling] = useState(true);
    function handleDelete(){
        localStorage.removeItem('cart');
        setStyling(false);
    }
    function handleClose(){
        setStyling(false);
    }
    return(
        <Container style={styling ? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'}}>
            <Close onClick={handleClose}>&times;</Close>
            <P>Przedmioty dodane przy ostatniej wizycie czekają na Ciebie w koszyku.</P>
            <Btn onClick={handleDelete}>Wyczyść</Btn>
        </Container>
    )
}
export default LastVisit