import React from 'react'
import IMAGES from '../../assets/images/images'

export default function Services() {
  return (
<>
{/* parent service div */}
<div className='w-full flex justify-center items-center bg-primary-black'>
  {/* child service div */}
  <div className='flex '>
    {/* h1 div */}
    <div className=' content-center justify-items-center '>
      <h1 className='text-5xl font-bold text-primary-blue text-center my-2 '>our Services</h1>
         {/* services div card */}
        <div className='content-center rounded-lg w-full  justify-center bg-primary-green mt-10 flex flex-col lg:flex-row '>
          {/* card image */}
          <img className='h-32 w-auto md:h-64 rounded-lg mx-4 my-4'  src={IMAGES.img2} alt="" />
          {/* card details */}
          <div className='static md:my-20 md:mx-6 mx-5'>
            {/* card description */}
              <div className=''>
                <h1 className='text-xl text-primary-black'>Price</h1>
                <h1 className='text-xl text-primary-black'>House cleaning</h1>
              </div>
              {/* button div */}
              <div className='md:my-2 '>
              <a href="/" className='px-4 py-2 bg-primary-blue text-primary-black md:text-3xl text-xl rounded-lg inline-block'> book now</a>
              </div>
          </div>
        </div>
        
    </div>
  </div>
</div>
</>
  )
}
