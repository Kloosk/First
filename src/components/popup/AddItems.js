import React, {useState} from "react";
import styled from "styled-components";
import All from "../../db/All";
import {Link} from "react-router-dom";

const Add = styled.div`
  cursor: pointer;
  z-index: 5;
  background-color: ${props => props.details ? "black" : "white"};
  position: ${props => props.details ? "static" : "absolute"};
  color: ${props => props.details ? "white" : "black"};
  bottom: 25%;
  left: 0;
  padding: 10px;
  transition: all 0.2s ease-in;
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
function AddItems(props) {
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
        <div>
        <ShowAdd style={style ? {top: 0} : {top: '-100%'}}>
            <Icon className="fas fa-check-circle"></Icon>
            <p>Dodano do koszyka</p>
            <StyledLink to={"/cart"}><Btn>Wyświetl koszyk</Btn></StyledLink>
        </ShowAdd>
        <Add onClick={addToCart} details={props.details}>Dodaj do koszyka</Add>
        </div>
    )
}
export default AddItems