import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';



const CarDetails = () => {

  const {id} = useParams();
  const navigate=useNavigate();
  const [Car,setCar]=useState(null);
  const currency=import.meta.env.VITE_CURRENCY;
  const handleSubmit= async (e)=>{
    e.preventDefault();
  }


  useEffect(()=>{
    setCar(dummyCarData.find(car =>car._id ===id));
  },[id])

  console.log(Car);

  
  return Car ? (
    <div className='px-6 md:px-16 lg;px-24 xl:px-32 mt-16'>
      <button onClick={()=>{
        navigate(-1);
      }} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'>
        <img src={assets.arrow_icon} className='rotate-180 opacity-65' alt="arrow icon" /> 
        back to all cars
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* left side car image and etails */}
          <div className="lg:col-span-2">
            <img src={Car.image} alt="car image" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' />
            <div className="space-y-6">
              <div className="text-3xl font-bold">
                <h1>{Car.brand}{Car.model}</h1>
                <p className='text-gray-500 text-lg'>{Car.category} . {Car.year}</p>
              </div>
              <hr className='border-bordercolor my-6' />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {
                  [
                    {
                      icon:assets.users_icon,
                      text:`${Car.seating_capacity} seats`

                    },
                    {
                      icon:assets.fuel_icon,
                      text:Car.fuel_type

                    }
                    ,
                    {
                      icon:assets.car_icon,
                      text:Car.transmission

                    }
                    ,
                    {
                      icon:assets.location_icon,
                      text:Car.location

                    }
                  ].map(({icon,text},index) =>(
                    <div className="flex flex-col items-center bg-light p-4 rounded-lg" key={text}>

                      <img src={icon} alt="" className='h-5 mb-2' />

                      {text}

                    </div>
                  ))
                }

              </div>

              {/* description  */}
              <div className="">

                <h1 className='text-xl font-medium mb-3'>Description </h1>
                <p className='text-gray-500'>{Car.description}</p>

              </div>

              {/* features */}

              <div className="">

                <h1 className='text-xl font-medium mb-3'>features </h1>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  {
                    ["360 camera",'bluetooth',"GPS",
                      "heated setas","rear viewmirror"
                    ].map((feature)=>(
                      <li key={feature} className='flex items-center text-gray-500'>
                        <img src={assets.check_icon} alt="check icon" className='h-4 mr-2'/>
                        {feature}
                      </li>
                    ))
                  }
                </ul>


              </div>

            </div>

          </div>


          {/* right side booking form */}
          <form onSubmit={handleSubmit} className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500' >

            <p>{currency}{Car.pricePerDay}<span className='text-base text-gray-400 font-normal'> per Day</span></p>

            <hr className='
             border-bordercolor my-6' />

            <div className="flex flex-col gap-2">
              <label htmlFor="pickup-date">Pick up Date</label> 
              <input type="date" className='border-bordercolor px-3 py-2 border rounded-lg' required id='pickup-date' min={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="return-date">return Date</label> 
              <input type="date" className='border-bordercolor px-3 py-2 border rounded-lg' required id='return-date'  />
            </div>


            <button className='w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer'>book now</button>



            <p className='text-center text-sm'>no credit card required to reserve</p>



          </form>


        </div>










    </div>
  ) : <Loader/>
}

export default CarDetails
