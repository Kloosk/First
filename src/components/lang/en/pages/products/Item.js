import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import All from "../../../db/All";

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
`;
const Add = styled.div`
  cursor: pointer;
  z-index: -1;
  background-color: white;
  opacity: 0;
  position: absolute;
  bottom: 25%;
  left: -2%;
  padding: 10px;
  transition: all 0.2s ease-in;
  ${Container}:hover & {
    z-index: 5;
    opacity: 0.8;
    left: 0;
  }
  @media (min-width: 320px) and (max-width: 767px) {
      z-index: 5;
      left: 0;
      opacity: 0.8;
  }
  
`;

const Product = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
const Description = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;
  text-align: center;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
`;
const H5 = styled.h5`
  font-size: 1.3rem;
  padding: 0;
  margin: 6px 0 0 0;
`;
const P = styled.p`
  font-size: 1.2rem;
  padding: 0;
  margin: 6px 0 0 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ShowAdd = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100vw;
  color: black;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in-out;
  text-align: center;
  padding: 30px 0;
`;
const Btn = styled.button`
margin: 10px auto 0 auto;
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
const Icon = styled.i`
color: darkgreen;
font-size: 2rem;
margin-bottom: 10px;
`;
function Item(props){
    const [style,setStyle] = useState(false);
    function addToCart(){
        let ob = {
            cart: []
        };
        if (localStorage.getItem('cart') != null) {
            let cart =  JSON.parse(localStorage.getItem('cart'));
            ob.cart = cart.cart;
        }
        ob.cart.push(All[props.id]);
        localStorage.setItem('cart', JSON.stringify(ob));

        setStyle(true);
        setTimeout(() => {
            setStyle(false);
        },6000);
    }
    return(
        <Container>
            <ShowAdd style={style ? {top: 0} : {top: '-100%'}}>
                <Icon className="fas fa-check-circle"></Icon>
                <p>Dodano do koszyka</p>
                <StyledLink to={"/cart"}><Btn>Wyświetl koszyk</Btn></StyledLink>
            </ShowAdd>
            <Add onClick={addToCart}>Dodaj do koszyka</Add>
            <StyledLink to={`/products/${props.id}`}>
            <Product style={{backgroundImage: `url(${props.img})`}}></Product>
                <Description>
                    <H5>{props.title}</H5>
                    <P>{props.p}</P>
                    <P>{props.price}zł</P>
                </Description>
            </StyledLink>
        </Container>
    )
}

export default Item