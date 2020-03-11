import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #333;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
   @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: repeat(2,1fr);
    }
`;

const Icon = styled.div`
text-align: center;
background-color: #444;
 color: white;
 padding: 40px;
 margin: 2px 10px;
 cursor: pointer;
 font-size: 3rem;
`;


function Social(){
    return(
        <Container>
            <Icon><i className="fab fa-facebook-square"></i></Icon>
            <Icon><i className="fab fa-instagram"></i></Icon>
            <Icon><i className="fab fa-google-plus-square"></i></Icon>
            <Icon><i className="fab fa-twitter-square"></i></Icon>
        </Container>
    )
}
export default Social