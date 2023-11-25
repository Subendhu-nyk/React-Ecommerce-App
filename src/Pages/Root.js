import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuBar from '../Component/Layout/Header/MenuBar'
import Header from '../Component/Layout/Header/Header'

const RootLayout = () => {
  return (
    <>    
    <Outlet/>
    </>
  )
}

export default RootLayout