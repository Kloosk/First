import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import AddItems from "../../popup/AddItems";
const Container = styled.div`
  width: 100%;
  position: relative;
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
            <AddItems id={props.id}/>
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