import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
