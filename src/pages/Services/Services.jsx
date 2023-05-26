import React from 'react'
import IMAGES from '../../assets/images/images'
import InputForm from './components/InputForm'
import { useState } from 'react'

export default function Services() {

  const [formPopUp, setFormPopUp] = useState(false)
  return (
<>
{/* parent service div */}
<div className='w-full flex justify-center items-center bg-primary-black flex-col md:mt-24 mt-24 mb-4 rounded-xl'>
  {/* child service div */}
  <div className='flex py-10'>
    {/* h1 div */}
    <div className=' content-center justify-items-center '>
      <h1 className='text-5xl font-bold text-primary-purple text-center my-2 font-serif '>our Services</h1>
         {/* services div card */}
        <div className='content-center rounded-lg w-full  justify-center bg-primary-green mt-10 flex flex-col lg:flex-row '>
          {/* card image */}
          <img className='h-32 w-auto md:h-64 rounded-lg mx-4 my-4 transition duration-700 ease-in-out hover:-translate-y-2'  src={IMAGES.img2} alt="" />
          {/* card details */}
          <div className='static md:my-20 md:mx-6 mx-5'>
            {/* card description */}
              <div className=''>
                <h1 className='text-2xl text-primary-black font-serif'>Price</h1>
                <h1 className='text-2xl text-primary-black font-serif'>House cleaning</h1>
              </div>
              {/* button div */}
              <div className='md:my-2 '>
              <button 
              className='px-4 py-2 bg-primary-blue text-primary-black md:text-3xl text-xl rounded-lg inline-block hover:bg-primary-purple
               hover:text-primary-blue transition duration-500 ease-in-out hover:-translate-y-1 font-sans hover:font-serif my-3'
               onClick={() => setFormPopUp (true)}
              > book now</button>
              </div>
          </div>
        </div>  
    </div>
  </div>
</div>
  <InputForm trigger={formPopUp}></InputForm>
</>
  )
}
