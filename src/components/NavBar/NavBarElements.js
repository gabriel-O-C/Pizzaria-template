import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaPizzaSlice} from "react-icons/fa"


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #fff;
`;

export const NavLink = styled(Link)`
  
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;


    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }

`;
export const NavIcon = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    margin-top: 25px;
    margin-right: 25px;
   


    p {
       font-size: 2rem;
        font-weight: bold;
        padding: 0 30px;
        margin-left: 15px;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 3rem;  
    transform: translate(-130%, -100%);  
    padding: 5px;
     
`;