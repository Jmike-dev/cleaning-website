import React from 'react'

export default function HomeFooter() {
  return (
  <>
  {/* about parent div container */}
  <div className='bg-primary-blue md:w-full rounded-md md:rounded-3xl my-4'>
    {/* about child div container */}
    <div className='md:w-full flex relative'>
      {/* h1 div container */}
      <br />
      <div className='md:w-1/2 mx-0 my-6 px-3 md:mx-5  '>
        <h1 className='text-primary-green md:mx-5 md:my-2 break-keep text-xl  md:text-5xl font-serif '>What Do We do? </h1>
      </div>
      <div className='md:w-1/2'>
        <p className='text-white md:text-3xl my-8 mx-10 font-serif'> We clean your home as well as you do</p>
      </div>
    </div>
  </div>
  </>
  )
}
