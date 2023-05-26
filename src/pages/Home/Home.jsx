import React from 'react'
import IMAGES from '../../assets/images/images'
import HomeFoooter from './components/HomeFooter'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate()

  function handleClick (){
    navigate('/services')
  }
  return (
    <>
    {/* home parent div  container */}
    <div  className='bg-primary-black rounded-b-lg w-full sm:w-auto py-2 md:relative shadow-sm shadow-primary-grey'>
      {/* home child div container */}
       <div className='w-full flex justify-end md:py-4 md:px-2 static' >
          {/* h1  div container */}
          <div className=' w-1/2 px-2 mx-1 my-5 md:absolute md:left-5 md:top-5 md:w-1/3'>
            <h1 className='text-2xl text-primary-purple hover:text-primary-green md:text-5xl font-serif'>Are you tired of cleaning then it's time to call us</h1>
          </div>
        {/* image div container */}
          <div className='w-2/3 px-2 md:w-auto sm:h-96  my-4' >
            <img className=' w-full h-full rounded-xl md:h-96 transition duration-700 ease-in-out hover:-translate-y-3 ' src={IMAGES.img1} alt=""  />
          </div>
      </div>
          {/* button div container */}
          <div className='md:relative my-6 mx-6 md:mx-96 md:right-72 md:bottom-32 md:py-4 md:px-4'>
              <button 
              onClick={handleClick}
              className=" w-full h-full rounded-xl block text-2xl bg-primary-green text-primary-blue text-center md:text-4xl transition duration-500 ease-in-out hover:-translate-y-2 hover:bg-primary-purple hover:text-primary-blue font-sans hover:font-serif"
              >Book Now</button>
          </div>
    </div>
      < HomeFoooter/>
    </>
  )
}
