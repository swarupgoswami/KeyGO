import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { useLocation } from 'react-router-dom'
function App() {

  const [ShowLogin,setShowLogin]=useState(false)
  const isOwnerPath=useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar  setShowLogin={setShowLogin}/>}
    </>
  )
}

export default App

