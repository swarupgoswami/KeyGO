import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const[PickupLocation,setPickupLocation]=useState('')
  






  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Luxury car on Rent</h1>

       {/* form of the hero section */}
      <form action="" className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgaba(0,0,0,0.1)]'>



         <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">

            <div className="flex flex-col items-start gap-2">
                <select required value={PickupLocation} onChange={(e)=>{setPickupLocation(e.target.value)}}>
                    <option value="">pickup location</option>
                    {cityList.map((city) => <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-gray-500'>{PickupLocation ? PickupLocation : "please select locatio"}</p>
            </div>

              {/* pickup date input div */}
            <div className="flex flex-col items-start gap-2">

                <label htmlFor='pickup-date'>pick-up date</label>
                <input type="date"  id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
            </div>




            {/* return date div */}
            <div className="flex flex-col items-start gap-2">

                <label htmlFor='return-date'>return date</label>
                <input type="date"  id="return-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
            </div>

            

         </div>
         
         {/* search button  div */}
            <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
              <img src={assets.search_icon} alt="search icon" />
              search </button>

      </form>

      <img src={assets.main_car} alt="max-h-74" />
    </div>
  )
}

export default Hero
