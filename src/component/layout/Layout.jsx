import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <>
    
    <Nav/>


    <Outlet/>



    <footer className='bottom-0 start-0 end-0 bg-dark text-white text-center p-1 fs-2 ' >Footer</footer>
    
    </>
  )
}
