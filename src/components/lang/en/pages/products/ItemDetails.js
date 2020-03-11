import React from 'react'
import styled from "styled-components";
import All from "../../../db/All";

const Container = styled.div`
 max-width: 60%;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 2fr 1fr;
 :nth-child(1){
 text-align: center;
 }
 
  @media (min-width: 320px) and (max-width: 767px) {
  max-width: 100%;
  grid-template-columns: 1fr;
}
`;
const Left = styled.div`
    padding: 10px;
    justify-self: right;
    @media (min-width: 320px) and (max-width: 767px) {
  justify-self: center;
}
`;
const Right = styled.div`
    padding-left: 15px;
    justify-self: left;
    @media (min-width: 320px) and (max-width: 767px) {
   justify-self: center;
}
`;
const Img = styled.img`
    height: 50vh;
    @media (min-width: 320px) and (max-width: 767px) {
    height: 60vh;
 
}
`;
const H1 = styled.h1`
  font-size: 1.3rem;
  padding: 0;
  margin: 6px 0 0 0;
`;
const P = styled.p`
  font-size: 1.2rem;
  padding: 0;
  margin: 6px 0 0 0;
`;
const Btn = styled.button`
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  border: none;
  background-color: #333;
  color: white;
  :hover{
  background-color: #444;
  }
`;

function ItemDetails({match}){
    const id = parseInt(match.params.id);
    const item = All.find(i => i.id === id);
    return(
        <Container>
            <Left>
                <Img src={item.img} alt={item.title}/>
            </Left>
            <Right>
                <H1>{item.title}</H1>
                <P>{item.p}</P>
                <P>{item.price}zł</P>
                <Btn>Dodaj do koszyka</Btn>
            </Right>
        </Container>
    )
}
export default ItemDetails