import React from 'react'
import './Navigation.css';
import { Link } from "react-router-dom";
import { MenuItem } from './MenuItems';

export default function Navigation() {
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Game Changer</h1>
        <ul className='nav-menu'>
            {MenuItem.map((item, index) => {
                return(
                <li key={index}>
                <a href='/'> 
                <i>{item.title}</i>
                </a>
            </li>
                )
            })}
            
        </ul>
        </nav>
  )
}

//https://www.youtube.com/watch?v=0dOSLhPzSGI