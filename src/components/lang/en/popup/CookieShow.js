import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  position:fixed;
  bottom: -100%;
  left: 0;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: black;
  color: white;
  font-size: 1rem;
  transition: all 1s ease-in-out;
`;
const Btn = styled.button`
  outline: none;
  border: none;
  margin-left: 15px;
  padding: 3px 13px;
  color: black;
  background-color: whitesmoke;
  :hover{
  background-color: white;
  }
`;
function CookieShow(props){
    const [show,setShow] = useState(props.show);
    function handleClick(){
        localStorage.setItem('cookie', `${props.show}`);
        setShow(false);
    }
    return(
        <Container style={show ? {bottom: 0} : {bottom: '-100%'}}>
            <p>Ta strona używa plików cookies.</p>
            <Btn onClick={handleClick}>OK</Btn>
        </Container>
    )
}
export default CookieShow