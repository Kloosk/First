import React from 'react'
import styled from 'styled-components'

const Sub = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.input`
  border: 1px solid #ccc;
  padding: 7px 14px 9px;
  transition: 0.4s;
  color: #333;
  box-sizing: border-box;
  letter-spacing: 1px;
  &:focus{
    outline: none;
  }
`;
const Send = styled.input`
position: relative;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 7px 14px 9px;
  transition: 0.4s;
  color: #333;
  letter-spacing: 1px;
  outline: none;

`;
const SubElement = styled.div`
  background-color: #fff;
  color: #111;
  padding: 10px 20px;
  text-align: center;
  opacity: 0;
  height: 0;
  transition: 1s;
`;
function Subscribe(){
    function handleClick(e) {
        e.preventDefault();
        e.target.nextSibling.style.opacity = "1";
        e.target.nextSibling.style.height = "auto";
    }
    return(
        <Sub>
            <div>
            <Text type="text" placeholder="Email"/>
            <Send onClick={handleClick} type="submit" value="Subskrybuj"/>
            <SubElement>
                <p>Dodano subskrypcje</p>
            </SubElement>
            </div>
        </Sub>
    )
}
export default Subscribe