import React from 'react'
import IMAGES from '../../assets/images'
import About from './components/About'


export default function Home() {
  return (
    <>
    {/* home parent div  container */}
    <div  className='bg-primary-black  rounded-b-lg  md:w-full sm:w-auto py-2 '>
      {/* home child div container */}
       <div className='w-full relative '>
        {/* image div container */}
          <div className=' flex justify-end py-2 mx-3 ' >
            <img className='h-64 w-auto rounded-xl md:h-80 ' src={IMAGES.img1} alt=""  />
          </div>
          {/* h1  div container */}
          <div className='relative left-1 md:absolute md:left-5 md:top-5 md:w-1/3 bottom-2'>
            <h1 className='text-xl text-primary-blue hover:text-primary-green md:text-5xl '>Are you tired of cleaning then it's time to call us</h1>
          </div>
          {/* button div container */}
          <div className='relative py-1'>
              <a href="/" class=" absolute  bottom-1 left-32  rounded-full px-4 py-2 text-white bg-primary-green transition
               ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 hover:text-primary-blue hover:bg-primary-light-green md:bottom-28 md:left-78 md:text-3xl">Book Now</a>
          </div>
      </div>
    </div>
      <About />
    </>
  )
}
