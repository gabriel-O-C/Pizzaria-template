import React from 'react'
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import {HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn} from './HeroElements';
import { useState } from 'react';

function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle = {toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
