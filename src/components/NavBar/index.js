import React from 'react'
import styled from 'styled-components';
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements';

const navAlign = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
`

function NavBar() {
    return (
       <Nav>
           <NavLink to="/">Pizza</NavLink>
            <navAlign className = "nav-align">
                <NavIcon>
                <p>Menu</p>
                <Bars></Bars>            
                </NavIcon>
            </navAlign>
       </Nav>
    )
}

export default NavBar;
