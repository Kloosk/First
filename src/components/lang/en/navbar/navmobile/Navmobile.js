import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Mobile = styled.div`
  position: fixed;
  right: 0; 
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: white;
  transition: all 0.4s ease-in;
  transform: translate(100%,-100%);
  overflow: hidden;
`;
const Lang = styled.div`
position: fixed;
top: 2px;
left: 4px;
font-size: 1.2rem;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 0.2rem;
`;
const Span = styled.span`
 :hover{
     cursor: pointer;
    border-bottom: 1px solid black;
 }
`;

const Exit = styled.div`
  cursor: pointer;
  position: fixed;
  top: 2px;
  right: 2px;
  font-size: 2.4rem;
  font-weight: bold;
`;
const Menu = styled.div`
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const Men = styled.div`
  text-align: center;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border-bottom: 2px solid black;
  
`;
const Women = styled.ul`
text-align:center;
list-style: none;
   display: grid;
  grid-template-columns: repeat(2,1fr);
  
`;
const DropElement = styled.div`
  display: block;
  text-align: center;
  border: 1px solid lightgray;
  padding: 5px 5px;
  cursor: pointer;
`;
const UlIn = styled.ul`
  display: none;
  list-style: none;
  text-align: center;
  &:first-child{
  margin-top: 3px;
  border-top: 1px solid lightgray;
  }
`;
const LiIn = styled.li`
  text-align: center;
  border-bottom: 1px solid lightgray;
  font-size: 0.8rem;
  padding: 5px 5px;
  cursor: pointer;
`;
const Title = styled.div`
  border: 1px solid lightgray;
  border-right: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
function Navmobile(props) {
    let mobile = props.open ? {transform:'translate(0,0)'} : {transform: 'translate(100%,-100%)'};
    let first;
    function handleSlide(e){
        e.target.lastChild.style.display = "block";
        if(first !== undefined) first.display = "none"
        first = e.target.lastChild.style;
    }
    return(
        <Mobile style={mobile}>
            <Lang>
                <Span><StyledLink to={"/"}>PL</StyledLink></Span>
                <Span><StyledLink to={"/en"}>EN</StyledLink></Span>
            </Lang>
            <Exit onClick={props.click}>&times;</Exit>
            <Menu>
                <Men>
                    <Title><p>Men</p></Title>
                    <div>
                    <DropElement onClick={handleSlide}>Shoes
                            <UlIn>
                                <LiIn><StyledLink to={"/products"}>Bieganie</StyledLink></LiIn>
                            <LiIn>Piłka nożna</LiIn>
                            <LiIn>Koszykówka</LiIn>
                            <LiIn>Trening</LiIn>
                            <LiIn>Tenis</LiIn>
                            <LiIn>Golf</LiIn>
                        </UlIn>
                    </DropElement>
                    <DropElement onClick={handleSlide}>Clothing
                        <UlIn>
                            <LiIn>Koszulki</LiIn>
                            <LiIn>Bluzy</LiIn>
                            <LiIn>Swetry</LiIn>
                            <LiIn>Spodnie</LiIn>
                            <LiIn>Legginsy</LiIn>
                            <LiIn>Kurtki</LiIn>
                            <LiIn>Dresy</LiIn>
                        </UlIn>
                    </DropElement>
                    <DropElement  onClick={handleSlide}>Sale
                        <UlIn>
                            <LiIn>Dresy</LiIn>
                            <LiIn>Legginsy</LiIn>
                            <LiIn>Koszulki</LiIn>
                            <LiIn>Bluzy</LiIn>
                        </UlIn>
                    </DropElement>
                    </div>
                </Men>
                <Women>
                    <Title><p>Women</p></Title>
                    <div>
                    <DropElement onClick={handleSlide} >Shoes
                        <UlIn>
                            <LiIn>Bieganie</LiIn>
                            <LiIn>Piłka nożna</LiIn>
                            <LiIn>Koszykówka</LiIn>
                            <LiIn>Trening</LiIn>
                            <LiIn>Tenis</LiIn>
                            <LiIn>Golf</LiIn>
                        </UlIn>
                    </DropElement>
                    <DropElement onClick={handleSlide}>Clothing
                        <UlIn>
                            <LiIn>Koszulki</LiIn>
                            <LiIn>Bluzy</LiIn>
                            <LiIn>Swetry</LiIn>
                            <LiIn>Spodnie</LiIn>
                            <LiIn>Legginsy</LiIn>
                            <LiIn>Kurtki</LiIn>
                            <LiIn>Dresy</LiIn>
                        </UlIn>
                    </DropElement>
                    <DropElement onClick={handleSlide}>Sale
                        <UlIn>
                            <LiIn>Dresy</LiIn>
                            <LiIn>Legginsy</LiIn>
                            <LiIn>Koszulki</LiIn>
                            <LiIn>Bluzy</LiIn>
                        </UlIn>
                    </DropElement>
                    </div>
                </Women>
            </Menu>
        </Mobile>
    );
}
export default Navmobile