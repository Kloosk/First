import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Container = styled.div`
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
  padding: 15px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
function ProductMain(props){
    return(
        <Container>
            <Add>Add to cart</Add>
            <StyledLink to={`/products/${props.id}`}>
            <Product style={{backgroundImage: `url(${props.img})`}}></Product>
            <Description>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>{props.price}zł</p>
            </Description>
            </StyledLink>
        </Container>
    )
}

export default ProductMain