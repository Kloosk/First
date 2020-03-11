import React from 'react'
import styled from 'styled-components'
import ProductMain from './ProductMain'
import All from "../../../db/All";

const Section = styled.section`
   width: 90%;
   height: 100%;
   margin: 3px auto;
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-gap: 15px;
   justify-content: center;
   
   @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: 1fr;
  }
`;
const H1 =styled.h1`
  z-index: 5;
  font-size: 2.2rem;
  width: 100%;
  text-align: center;
 
`;
const Hr  = styled.hr`
    background-color: lightgray;
    height: 12px;
    width: 100%;
    opacity: 0.2;
    border-radius: 20%;
    
`;
const Title  = styled.div`
padding: 25px 0;
display: flex;
align-items: center;
justify-content: center;
 width: 100%;
`;
function Promotion(){
    const products = [
        All[0],
        All[1],
        All[2],
        ];
    const Items = products.map(item => <ProductMain id={item.id} key={item.id} img={item.img} title={item.title} description={item.p} price={item.price}/>)
    return(
        <div>
            <Title>
                <Hr/>
                <H1>Polecane</H1>
                <Hr/>
            </Title>
            <Section>
                {Items}
            </Section>
        </div>
    )
}

export default Promotion