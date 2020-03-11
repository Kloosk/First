import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import Register from "../../pages/register/Register"

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 30px;
  
`;
const Li = styled.h3`
  font-size: 1.1rem;
  color: #333333;
  padding: 0 30px;
  cursor: pointer;
   @media (min-width: 320px) and (max-width: 767px) {
  display: none;
}
`;
const Lang = styled.div`
  margin-left: 4px;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
   @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
const Logo = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: #333;
  cursor: pointer;
`;
const Color = styled.span`
 color: darkred;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
   
`;
const Menu = styled.div`
  display: none;
  cursor: pointer;
  width: 30px;
  
  @media (min-width: 320px) and (max-width: 767px) {
  display: block;
}

  
`;
const Line = styled.div`
 margin: 3px 0;
 height: 3px;
 width: 100%;
 background-color: #000;
`;
const User = styled.li`
display: none;
cursor: pointer;
 @media (min-width: 320px) and (max-width: 767px) {
  display: block;
}
`;
const CartShop = styled.li`
cursor: pointer;
  margin: 0 10px;
`;
const Span = styled.span`
 padding: 0 2px;
 :hover{
    cursor: pointer;
    border-bottom: 1px solid black;
 }
`;
const StyledLink = styled(Link)`
 margin-right: auto;
  text-decoration: none;
  color: black;
`;
function Navup(props){
    const [openReg, setOpenReg] = useState(false);
    function openRegister(){
        setOpenReg(!openReg);
    }
    return(
        <Nav >
            <Register open={openReg} openFunc={openRegister}/>
            <StyledLink to={"/"}><Logo>Sho<Color>PP</Color>ing</Logo></StyledLink>
            <Ul>
                <Li onClick={openRegister}>Dołącz/Zaloguj się</Li>
                <User onClick={openRegister}><i className="fas fa-user-alt"></i></User>
                <CartShop><StyledLink to={"/cart"}><i className="fas fa-shopping-cart"></i></StyledLink></CartShop>
                <Lang>
                    <Span><StyledLink to={"/"}>PL</StyledLink></Span>
                    <Span><StyledLink to={"/en"}>EN</StyledLink></Span>
                </Lang>
                <Menu onClick={props.click}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Menu>
            </Ul>
        </Nav>
    );
}
export default Navup