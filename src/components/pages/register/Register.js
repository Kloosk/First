import React from 'react'
import styled from  'styled-components'
import {BrowserRouter as Router,Link } from 'react-router-dom';

const Login = styled.div`
  display: none;
  background-color: #fff;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
  padding: 20px 20px;
  text-align: center;
  max-width: 40%;
   @media (min-width: 320px) and (max-width: 767px) {
      min-width: 80%;
    }
`;
const Exit = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Logo = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.4rem;
  color: #333;
  cursor: pointer;
`;
const Color = styled.span`
 color: darkred;
`;
const Input= styled.input`
  margin-bottom: 12px;
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Text = styled.span`
  width: 80%;
 color: black;
 font-size: 1rem;
 padding: 10px 0;
`;
const Label = styled.span`
 padding: 0 15px;
`;
function Register(props){
    function exitReg(){
        props.openFunc();
    }
    function handleSubmit(e){
        e.preventDefault();
        props.openFunc();
    }
    return(
        <Router>
        <Login onSubmit={handleSubmit} style={{display: props.open ? "block" : "none"}}>
            <Exit onClick={exitReg}>&times;</Exit>
            <Logo>Sho<Color>PP</Color>ing</Logo>
            <Form>
                <Input placeholder="E-mail" type="email" name="email" />
                <Input placeholder="Hasło" type="password" name="pass" />
                <Label>
                <input
                    name="nologout"
                    type="checkbox"
                />
                Nie wylogowuj mnie
                </Label>
                <Text>Zalogowanie się oznacza zaakceptowanie następujących dokumentów firmy Shopping: <Link to="/">Zasady ochrony prywatności i Warunki korzystania.</Link></Text>
                <Input type="submit" value="Zaloguj" />
            </Form>
            <Text>Nie jesteś jeszcze członkiem? <Link to="/">Dołącz teraz</Link></Text>
        </Login>
        </Router>
    )
}

export default Register