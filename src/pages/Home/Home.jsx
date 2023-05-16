import React from 'react'
import IMAGES from '../../assets/images'
// import About from './components/About'


export default function Home() {
  return (
    <div 
    className='bg-primary-grey flex-bottom pt-4 rounded-xl mx-3  mt-5 pb-4'>
        <div 
        className='flex bg-primary-blue rounded-xl px-2 mx-2 my-2  shadow-2xl transition-all '>
          <div className='flex relative'>
            <h1 
            className='text-primary-grey hover:text-primary-dark-grey text-5xl mt-28   mx-44  mb-44'>
              Are you tired of cleaning then it's time to call us</h1>
              <button className='bg-primary-green py-2 px-4   hover:bg-primary-light-green   rounded-full absolute bottom-12 left-40'>book now</button>
          </div>
            <div 
            className='px-4 mx-3 mt-3'>
              <img src={IMAGES.img1}  alt="" 
              className='max-w-lg  flex rounded-3xl h-96 mb-3 transform transition-all hover:scale-95 ' />
            </div>
        </div>
        {/* <About /> */}
    </div>
  )
}
