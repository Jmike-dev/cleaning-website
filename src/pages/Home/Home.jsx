import React from 'react'
import IMAGES from '../../assets/images'
// import About from './components/About'


export default function Home() {
  return (
    <>
        {/* <About /> */}
    <div  className='bg-primary-blue  rounded-b-lg  md:w-full sm:w-auto  '>
       <div className='w-full relative '>
          <div className=' flex justify-end py-2 mx-3 ' >
            <img className='h-80 w-auto rounded-3xl ' src={IMAGES.img1} alt=""  />
          </div>
          <div className='relative left-3 md:absolute md:left-5 md:top-5 md:w-1/3'>
            <h1 className='text-xl text-primary-grey hover:text-primary-light-green md:text-5xl '>Are you tired of cleaning then it's time to call us</h1>
          </div>
          <div className='relative '>
              <a href="/" class="bottom-0 right-0 inline-block rounded-full px-4 py-2 text-white bg-primary-green transition
               ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 hover:bg-primary-light-green">Button</a>
          </div>
      </div>
    </div>
    </>
  )
}
