import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Car from './pages/Car.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Footer from './components/Footer.jsx'



function App() {

  const [ShowLogin,setShowLogin]=useState(false)
  const isOwnerPath=useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar  setShowLogin={setShowLogin}/>}


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path="/cars" element={<Car/>} />
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>

      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App

