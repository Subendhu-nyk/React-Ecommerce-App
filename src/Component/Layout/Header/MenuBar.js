import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MenuBar.module.css'



const MenuBar = (props) => {
  return (
    <Fragment>
     <NavLink to="/" className={({ isActive }) => `text-white ${isActive ? classes.active : ''}`}>Home</NavLink>
      <NavLink to="/Store" className={({ isActive }) => `text-white ${isActive ? classes.active : ''}`}>Store</NavLink>
      <NavLink to="#pricing" className={({ isActive }) => `text-white ${isActive ? classes.active : ''}`}>Pricing</NavLink>
   </Fragment>
  )
}

export default MenuBar