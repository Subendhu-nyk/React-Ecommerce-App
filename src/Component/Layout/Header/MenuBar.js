import React, { useContext } from 'react'
import { NavLink  } from 'react-router-dom'
import classes from './MenuBar.module.css'
import CartContext from '../../../Store/CartContext'






const MenuBar = (props) => {
  
  const authCtx=useContext(CartContext)  
  const isLoggedIn=authCtx.isLoggedIn;

  
  return (
    <header className={`${classes.header} ${classes.list}`}>
     <NavLink exact to="/" activeClassName={`${classes.active}`}>Home</NavLink>
      <NavLink to="/Store" activeClassName={`${classes.active}`}>Store</NavLink>
      <NavLink to="/About" activeClassName={`${classes.active}`}>About</NavLink>
      {!isLoggedIn && (<NavLink to="/Login" activeClassName={`${classes.active}`}>Login</NavLink>)}
      <NavLink to="/Contact" activeClassName={`${classes.active}`}>Contact us</NavLink>
     
   </header>
  )
}

export default MenuBar