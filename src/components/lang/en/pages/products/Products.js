import React from 'react'
import styled from 'styled-components'
import All from "../../../db/All";
import Item from "./Item";
import Navigation from "../../navbar/Navigation";
import Footer from "../../footer/Footer";

const Container = styled.div`
   width: 90%;
   height: 100%;
   margin: 120px auto 15px auto;
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-gap: 15px;
   justify-content: center;
   
   @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: 1fr;
      margin-top: 50px;
  }
`;


const Items = All.map(item => <Item id={item.id} key={item.id} title={item.title} p={item.p} price={item.price} img={item.img}/>);
function Products(){
    return(
        <div>
            <Navigation/>
            <Container>
                {Items}
            </Container>
            <Footer/>
        </div>
    );
}
export default Products