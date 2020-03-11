import React from 'react'
import styled from 'styled-components'
import Slideshow from "./slideshow/Slideshow";
import { Slide } from 'react-slideshow-image';
import Image0 from "../../img/slider/image1.jpg";
import Image2 from "../../img/slider/image3.jpg";
import Image1 from "../../img/slider/image2.jpg";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false
};
const Show = styled(Slide)`
  width: 100vw;
`;
function Header(){
    const SLIDE = [
        {
            id: 0,
            h1: "50% taniej",
            p: "Na wszystkie produkty z działu bluzy",
            img: Image0},
        {
            id: 1,
            h1: "Garnitury",
            p: "Moda męska w 2019",
            img: Image2},
        {
            id: 2,
            h1: "Podążaj za modą",
            p: "Odwiedź nasz sklep",
            img: Image1},
    ];
    const slider = SLIDE.map(slide => <Slideshow key={slide.id} h1={slide.h1} p={slide.p} img={slide.img}/>);
    return(

    <Show {...properties}>
        {slider}
    </Show>

    )
}

export default Header