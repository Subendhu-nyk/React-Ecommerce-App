import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MenuBar.module.css'



const MenuBar = (props) => {
  return (
    <header className={`${classes.header} ${classes.list}`}>
     <NavLink exact to="/" activeClassName={`${classes.active}`}>Home</NavLink>
      <NavLink to="/Store" activeClassName={`${classes.active}`}>Store</NavLink>
      <NavLink to="/About" activeClassName={`${classes.active}`}>About</NavLink>
      <NavLink to="/Contact" activeClassName={`${classes.active}`}>Contact us</NavLink>
   </header>
  )
}

export default MenuBar