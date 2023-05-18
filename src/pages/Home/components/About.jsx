import React from 'react'

export default function About() {
  return (
  <>
  {/* about parent div container */}
  <div className='bg-primary-blue md:w-full rounded-md md:rounded-3xl my-4'>
    {/* about child div container */}
    <div className='md:w-full flex relative'>
      {/* h1 div container */}
      <br />
      <div className='md:w-1/2 mx-0 my-6 px-3 md:mx-5  '>
        <h1 className='text-primary-green md:mx-5 md:my-2 break-keep text-xl  md:text-5xl '>What Do We do? </h1>
      </div>
      {/*  h2 div conatainer */}
      {/* <div className='absolute bottom-7 -left-5 md:bottom-7 md:left-10 bg-primary-purple mx-12'> */}
        {/* <h2 className='inline-block md:text-3xl text-xl'>Our job is to clean your home as well as you do</h2> */}
      {/* </div> */}
      {/* p div container */}
      <div className='md:w-1/2'>
        <p className='text-white md:text-3xl my-8 mx-10'> We clean your home as well as you do</p>
      </div>
    </div>
  </div>
  </>
  )
}
