import React from 'react'
import IMAGES from '../../assets/images'

export default function Home() {
  return (
    <>
    <div 
    className='flex bg-primary-blue rounded-xl px-2 mx-2 my-2  shadow-2xl transition-all '>
      <h1 
      className='text-primary-light-green text-5xl mt-28  px-5 mx-1 '>Are you tired of cleaning then it's time to call us</h1>
        <div 
        className='px-4 mx-3 mt-3'>
          <img src={IMAGES.img1}  alt="" 
          className='max-w-lg rounded-3xl h-96 mb-3 transform transition-all hover:scale-95 ' />
        </div>
    </div>
    </>
  )
}
