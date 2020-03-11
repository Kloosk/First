import React, {useEffect, useState} from 'react';
import Navigation from './navbar/Navigation'
import Main from './main/Main'
import {createGlobalStyle} from "styled-components";
import Footer from "./footer/Footer";
import LastVisit from "./popup/LastVisit";
import CookieShow from "./popup/CookieShow";

const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
   overflow-x: hidden;
  }`;
function Home() {
    const [fullCart,setFullCart] = useState(false);
    const cookieAlert = localStorage.getItem('cookie') === null;
    useEffect(() => {
            setFullCart(true);
    },[]);
    let localCart = localStorage.getItem('cart') !== null;
    return (
        <div>
            <GlobalStyle/>
            <Navigation/>
            <Main/>
            <Footer/>
            <CookieShow show={cookieAlert}/>
            {(fullCart && localCart) && <LastVisit/>}
        </div>

    );
}

export default Home;