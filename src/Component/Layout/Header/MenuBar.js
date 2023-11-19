import React, { Fragment } from 'react'
import { NavLink } from 'react-bootstrap'

const MenuBar = (props) => {
  return (
    <Fragment>
    <NavLink className="text-white" href="#home">Home</NavLink>
    <NavLink className="text-white" href="#features">Features</NavLink>
    <NavLink className="text-white" href="#pricing">Pricing</NavLink>
    </Fragment>
  )
}

export default MenuBar