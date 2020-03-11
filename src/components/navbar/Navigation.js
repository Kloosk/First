import React,{useState} from 'react';
import Navup from './navup/Navup'
import Navdown from './navdown/Navdown'
import Navmobile from "./navmobile/Navmobile";
import styled from 'styled-components'

const Nav = styled.nav`
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  opacity: 1;
  background-color: #ffffff;
   @media (min-width: 320px) and (max-width: 767px) {
  opacity: 1;
}
`;

function Navigation(){
    const [mobile,setMobile] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        setMobile(!mobile);
    }
    return(
    <Nav>
        <Navmobile click={handleClick} open={mobile}/>
        <Navup click={handleClick}/>
        <Navdown/>
    </Nav>
    );
}
export default Navigation