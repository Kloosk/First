import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 150px;
  padding: 10px;
  display: flex;
  width: 100%;
`;
const Img = styled.img`
width: 150px;
height: 150px;
`;
const Text = styled.div`
  font-size: 1.2rem;
  padding: 5px 0 0 25px;
`;
function CartItem(props){
    return(
        <Container>
            <Img src={props.img} alt={props.title}/>
            <Text>
                <p>{props.title}</p>
                <p>{props.p}</p>
                <p>{props.price}zł</p>
            </Text>

        </Container>
    )
}
export default CartItem
