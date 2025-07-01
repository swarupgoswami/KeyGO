import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const CarDetails = () => {

  const {id} = useParams();
  const navigate=useNavigate();
  const [Car,setCar]=useState(null);
  useEffect()
  return (
    <div>
      
    </div>
  )
}

export default CarDetails
