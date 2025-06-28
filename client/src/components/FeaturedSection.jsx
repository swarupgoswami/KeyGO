import React from 'react'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import Title from './Title'

const FeaturedSection = () => {

    const navigate=useNavigate();


  return (
    <div className='flex flex-col  items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>

        {/* title div */}
      <div className="">

        <Title title='featured vechiles' subTitle='explore our selcetion of premium vechiles available for your nect adventure' align=''/>

      </div>

        {/* car cards div */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8 mt-18">
            {
                dummyCarData.slice(0,6).map((car)=>(

                    <div className="" key={car._id} >
                        <CarCard car={car}/>
                    </div>

                ))
            }

        </div>

        {/* explore buttons */}
        <button onClick={()=>{navigate('/cars');
            scrollTo(0,0);
        }} className='flex items-center gap-2 px-6 py-2 border border-bordercolor hover:ng-gray-50 rounded-md mt-18 cursor pointer'>
            Explore all cars <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
    </div>
  )
}

export default FeaturedSection
