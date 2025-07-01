import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' px-6  md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-12 md:gap-6 pb-6 border-bordercolor'>
                <div className=''>
                    <img src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        premium car rental service with a wide selection of luxury vechiles for your driving needs
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-basefont-medium text-gray-800 uppercase'>quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">browse cars</a></li>
                        <li><a href="#">list your car</a></li>
                        <li><a href="#">about us</a></li>
                        
                    </ul>
                </div>

                 

                 <div>
                    <h2 className='text-basefont-medium text-gray-800 uppercase'>resourcs</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">help center</a></li>
                        <li><a href="#">browse cars</a></li>
                        <li><a href="#">list your car</a></li>
                        <li><a href="#">about us</a></li>
                        
                    </ul>
                </div>


                 


                <div>
                    <h2 className='text-basefont-medium text-gray-800 uppercase'>contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>california street 13</li>
                        <li>san frasisco </li>
                        <li>12345678</li>
                        <li>keyGo@gamil.com</li>
                        
                    </ul>
                </div>

               


            </div>
            {/* <hr className='border-gray-300 mt-8' /> */}
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> <span> | </span></li>
                    <li><a href="#">Terms</a><span> | </span></li>
                    <li><a href="#">cokies</a><span> | </span></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
