import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements';



function NavBar({toggle}) {
    return (
       <Nav>
           <NavLink to="/">Pizza</NavLink>
            
                <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars></Bars>            
                </NavIcon>
         
       </Nav>
    )
}

export default NavBar;
