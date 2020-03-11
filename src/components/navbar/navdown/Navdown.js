import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  list-style: none;
  @media (min-width: 320px) and (max-width: 767px) {
  display: none;
}
`;
const LiM = styled.li`
 text-transform: uppercase;
 color: black;
 font-size: 1.4rem;
 padding: 20px 20px;
 :hover{
 border-bottom: 2px solid black;
 }
  :hover :nth-child(1){
    left: 0;
 }
`;

const LiK = styled.li`
 text-transform: uppercase;
 color: black;
 font-size: 1.4rem;
 padding: 20px 20px;
 
 :hover{
    border-bottom: 2px solid black;
  }
 :hover :nth-child(1){
    right: 0;
 }
`;
const DropK = styled.div`
  padding: 40px 0;
  margin-top: 21px;
  position: absolute;
  right: -100%;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: white;
  transition: all .4s ease-in-out;
`;
const DropM = styled(DropK)`
  left: -100%;
`;

const DropElement = styled.div`
  padding: 0 60px;
  
`;
const H3 = styled.h3`
 font-size: 1.2rem;
 
`;
const Sale = styled.h3`
 font-size: 1.5rem;
 color: red;
 
`;
const UlIn = styled.ul`
  font-size: 1rem;
  list-style: none;
  padding: 10px 0;
`;
const LiIn = styled.li`
  padding: 2px 0;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Navdown(){
    return(
        <Ul>
            <LiM><StyledLink to={'/products'}>Mężczyzna</StyledLink>
                <ul>
                    <DropM>
                        <DropElement>
                            <H3>Buty</H3>
                            <UlIn>
                                <LiIn><StyledLink to={'products/'}>Bieganie</StyledLink></LiIn>
                                <LiIn>Piłka nożna</LiIn>
                                <LiIn>Koszykówka</LiIn>
                                <LiIn>Trening</LiIn>
                                <LiIn>Tenis</LiIn>
                                <LiIn>Golf</LiIn>
                            </UlIn>
                        </DropElement>
                        <DropElement>
                            <H3>Odzież</H3>
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
                        <DropElement>
                            <Sale>Wyprzedaż</Sale>
                            <UlIn>
                                <LiIn>Dresy</LiIn>
                                <LiIn>Legginsy</LiIn>
                                <LiIn>Koszulki</LiIn>
                                <LiIn>Bluzy</LiIn>
                            </UlIn>
                        </DropElement>
                    </DropM>
                </ul>
            </LiM>
            <LiK><StyledLink to={'/products'}>Kobieta</StyledLink>
                <ul>
                    <DropK>
                        <DropElement>
                            <H3>Buty</H3>
                            <UlIn>
                                <LiIn>Bieganie</LiIn>
                                <LiIn>Piłka nożna</LiIn>
                                <LiIn>Koszykówka</LiIn>
                                <LiIn>Trening</LiIn>
                                <LiIn>Tenis</LiIn>
                                <LiIn>Golf</LiIn>
                            </UlIn>
                        </DropElement>
                        <DropElement>
                            <H3>Odzież</H3>
                            <UlIn>
                                <LiIn>Koszulki</LiIn>
                                <LiIn>Bluzy</LiIn>
                                <LiIn>Swetry</LiIn>
                                <LiIn>Spodnie</LiIn>
                                <LiIn>Legginsy</LiIn>
                                <LiIn>Kurtki</LiIn>
                                <LiIn>Dresy</LiIn>
                                <LiIn>Sukienki</LiIn>
                            </UlIn>
                        </DropElement>
                        <DropElement>
                            <Sale>Wyprzedaż</Sale>
                            <UlIn>
                                <LiIn>Dresy</LiIn>
                                <LiIn>Legginsy</LiIn>
                                <LiIn>Koszulki</LiIn>
                                <LiIn>Bluzy</LiIn>
                            </UlIn>
                        </DropElement>
                    </DropK>
                </ul>
            </LiK>
        </Ul>
    );
}
export default Navdown