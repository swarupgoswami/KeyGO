import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subTitle}</p>
    </>
  )
}

export default Title
