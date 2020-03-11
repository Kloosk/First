import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import CartItem from "./CartItem";
import Navigation from "../../navbar/Navigation";
import Footer from "../../footer/Footer";

const Container = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 150px;
 margin-bottom: 15px;

 :nth-child(1){
 text-align: center;
 }
  @media (min-width: 320px) and (max-width: 767px) {
  flex-direction: column;
  text-align: center;
  width: 100%;
 
}
`;
const Button = styled.button`
  padding: 14px;
  width: 100%;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  background-color: #333;
  border: none;
  :hover{
  background-color: #444;
  }
`;
function Cart(){
    const [full,setFull] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [total,setTotal] = useState(0);
    useEffect(handleCart,full);
    function handleCart(){
        let safe = JSON.parse(localStorage.getItem('cart')) !== null;
        setFull(safe);
        if (safe) {
            let cart =  JSON.parse(localStorage.getItem('cart'));
            let mapItem = cart.cart.map(item => <CartItem key={item.id} title={item.title} p={item.p} price={item.price} img={item.img}/>);
            let reduceItem = 0;
            for(let i=0; i<cart.cart.length; i++){
                reduceItem+=cart.cart[i].price;
            }
            setTotal(reduceItem);
            setCartItem(mapItem);
        }
    }
    return(
        <div>
        <Navigation/>
        <Container>
            <div>
                <h1>Koszyk</h1>
                {full ? cartItem : <p>Brak produktów w koszyku.</p>}
            </div>
            <div>
                <h1>Podsumowanie</h1>
                <p>{total}zł</p>
                <Button>Przejdź do kasy</Button>
            </div>
        </Container>
            <Footer/>
        </div>
    )
}
export default Cart