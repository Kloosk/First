import React from 'react'
import Header from './Header'
import Promotion from './promotion/Promotion'
import Subscribe from './subscribe/Subscribe'
import Social from './social/Social'
import styled from 'styled-components'

const Center = styled.main`
  width: 100vw;
`;

function Main(){
    return(
        <Center>
            <Header/>
            <Promotion/>
            <Subscribe/>
            <Social/>
        </Center>
    )
}

export default Main