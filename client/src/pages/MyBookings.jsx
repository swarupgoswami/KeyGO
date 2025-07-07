import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets';
import Title from '../components/Title';

const MyBookings = () => {

  const[bookings,setBookings]=useState([]);
  const currency=import.meta.env.VITE_CURRENCY;

  const fetchMyBookings= async ()=>{
    setBookings(dummyMyBookingsData);
  };


  useEffect(()=>{
    fetchMyBookings();
  },[]);



  return (
    <div className=' px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>

      <Title title="my bookings" subTitle="view and manage your all car bookings"
      align="left"/>

      <div className="">
        {bookings.map((booking,index)=>(
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-bordercolor rounded-lg mt-5 first:mt-12"key={booking._id}>

            {/* car image div */}

            <div className="md:col-span-1">

              <div className="rounded-md overflow-hidden mb-3">
                <img src={booking.car.image} alt="car image" className='w-full h-auto aspect-video object-cover' />
              </div>
              <p className='text-lg font-medium mt-2'>{booking.car.brand} {booking.car.model}</p>


              <p className='text-gray-500'>{booking.car.year} * {booking.car.category} * {booking.car.location}</p>

            </div>


            {/* bookign details */}

            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className='px-3 py-1.5 bg-light rounded'>booking # {index+1}</p>
                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === 'confirmed' ? "bg-green-400/15 text-green-600":'bg-red-400/15 text-red-600'}`}>{booking.status}</p>

              </div>

              <div className="flex items-start gap-2 mt-3">
                <img src={assets.calendar_icon_colored} alt="calendar icon" className='w-4 h-4 mt-1' />
                <div className="">
                  <p className='text-gray-500'>Rental period</p>
                  <p>{booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <img src={assets.location_icon_colored} alt="calendar icon" className='w-4 h-4 mt-1' />
                <div className="">
                  <p className='text-gray-500'>pickup Location</p>
                  <p>{booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>







            </div>


            {/* price */}

            <div className="md:col-span-1 flex flex-col justify-between gap-6">
              <div className="">

                <p>Total price</p>
                <h1 className='text-2xl font-semibold text-primary'>{currency}{booking.price}</h1>
                <p>booked on {booking.createdAt.split("T")[0]}</p>
              </div>
            </div>







          </div>

          







        ))}
      </div>

      
    </div>
  )
}

export default MyBookings
