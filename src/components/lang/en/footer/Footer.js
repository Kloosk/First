import React from 'react'
import styled from 'styled-components'

const Container= styled.footer`
    padding-top: 50px;
    width: 100%;
    background-color: #333;
    display: grid;
    color: white;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: repeat(2,1fr);
    }
\`;
`;
const Box = styled.div`
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 20px 20px 0 20px;
  cursor: pointer;
`;
const H5 = styled.h5`
  font-size: 0.9rem;
  cursor: none;
  padding-bottom: 2px;  
`;
function Footer(){
    return(
       <Container>
           <Box>
               <H5>About</H5>
               <p>News</p>
               <p>Careers</p>
               <p>Contact Us</p>
           </Box>
           <Box>
               <H5>Shop</H5>
               <p>Order Status</p>
               <p>Shipping and Delivery</p>
               <p>Payment Options</p>
           </Box>
           <Box>
               <H5>For you ciebie</H5>
               <p>Warranty</p>
               <p>Size chart</p>
               <p>availability in stores</p>
           </Box>
           <Box>
               <H5>shop mon-fri 9:00-15:00</H5>
               <p>+48 123 456 789</p>
               <p>shop@@shop.pl</p>
           </Box>
       </Container>
    )
}
export default Footer