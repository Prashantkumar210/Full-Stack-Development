import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
