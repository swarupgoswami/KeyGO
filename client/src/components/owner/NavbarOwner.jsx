import React from 'react'
import { assets, dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const NavbarOwner = () => {

    const user=dummyUserData;


  return (
    <div className='flex item-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-bordercolor relative transition-all'>

        <Link to='/'>
          <img src={assets.logo} alt="logo" className='h-7' />
        </Link>
        <p>welcome, {user.name || "owner"}</p>
      
    </div>
  )
}

export default NavbarOwner
