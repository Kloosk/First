import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const H1 = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;
const Btn = styled.button`
  background-color:#969696;
border-radius:28px;
border:1px solid #000;
cursor:pointer;
color:#000000;
font-size:17px;
padding:16px 31px;
text-decoration:none;
text-shadow:0px 1px 0px #2f6627;
outline: none;
width: 100%;
:hover {
background-color: #a8a8a8;
}
@media (min-width: 320px) and (max-width: 767px) {
  width: 100%;
`;
const Container = styled.span`
  opacity: 0.9;
  padding: 30px;
  position: absolute;
  width: 40vw;
  bottom: 10%;
  left: 0;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 767px) {
  width: 100%;
   bottom: 0;
   }
`;
const P = styled.p`
  padding-top: 15px;
  padding-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 auto;
  justify-self: center;
  width: 70%;
`;
const Slider = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 95vh;
`;
const BackImg = styled.div`
    height: 95vh;
    background-position: center top; 
    background-repeat: no-repeat; 
    background-size: cover; 
`;
function Slideshow(props){
    return(
        <Slider className="each-slide">
            <BackImg style={{'backgroundImage': `url(${props.img})`}}>
                <Container>
                    <H1>{props.h1}</H1>
                    <P>{props.p}</P>
                    <StyledLink to={'/products'}><Btn>Shop</Btn></StyledLink>
                </Container>
            </BackImg>
        </Slider>
    )
}
export default Slideshow