import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements';

function NavBar() {
    return (
       <Nav>
           <NavLink to="/">Pizza</NavLink>
           <NavIcon>
            <p>Menu</p>
            <Bars></Bars>            
           </NavIcon>
       </Nav>
    )
}

export default NavBar;
