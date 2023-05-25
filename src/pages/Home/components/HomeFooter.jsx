import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import IMAGES from '../../../assets/images/images'

export default function HomeFooter() {

  const slides = [
    {url: IMAGES.slide1},
    {url: IMAGES.slide2}
  ]
  const [currentslide, setCurrentSlide] = useState(0)

//  previous slide function
  const prevslide = () => {
    const isFirstSlide = currentslide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentslide - 1;
    setCurrentSlide(newSlide)
  }
// nwxt slide Function
  const nextslide = () => {
    const isLastSlide = currentslide === slides.length -1;
    const newSlide = isLastSlide ? 0: currentslide + 1;
    setCurrentSlide(newSlide)
  }
  return (
  <>
  {/* about parent div container */}
  <div className='bg-primary-blue md:w-full rounded-md md:rounded-3xl my-4 flex px-4  group'>
      {/* slides container */}
      <div className='md:max-w-[1400px] md:h-[780px] h-96 w-full m-auto py-16 px-4' >
        {/* slide div */}
          <div 
          style={{backgroundImage: `url(${slides[currentslide].url})`}}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-700' ></div>
          {/* left arrow */}
          <div  className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevslide} size={30} />
          </div>
          {/* right arrow */}
          <div className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextslide} size={30}/>
          </div>
      </div>
  </div>
  </>
  )
}
