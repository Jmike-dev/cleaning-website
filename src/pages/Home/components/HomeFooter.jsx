import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import IMAGES from '../../../assets/images/images'

export default function HomeFooter() {

  const slides = [
    {url: IMAGES.slide1, title:'What do we do?'},
    {url: IMAGES.slide2, title: 'We clean your house as well as you do'}
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
  <div className='w-full rounded-md md:rounded-3xl my-4 flex px-4  group justify-end '>
      {/* slides container */}
      <div className='md:max-w-[1080px] md:h-[780px] h-96 w-3/4 m-auto py-16 px-4 md:ml-10 ' >
        {/* slide div */}
          <div 
          style={{backgroundImage: `url(${slides[currentslide].url})`}}
          className='w-40 md:w-full h-full rounded-2xl bg-center bg-cover duration-700 ' >
          </div>
          {/* left arrow */}
          <div  className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          left-5 text-2xl rounded-full p-2 bg-transparent text-primary-blue cursor-pointer hidden '>
            <BsChevronCompactLeft onClick={prevslide} size={30} />
          </div>
          {/* right arrow */}
          <div className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          -right-2 md:right-2 text-2xl rounded-full p-2  bg-transparent text-primary-blue cursor-pointer'>
            <BsChevronCompactRight onClick={nextslide} size={30}/>
          </div>
      </div>
               <div className=' md:pt-80  pt-32 '>
            {slides.map(text => (
              <h1 key={text.title} className='text-center md:text-5xl font-san  text-primary-purple text-2xl '
              >{text.title}</h1>
            ))}
            </div>
  </div>
  </>
  )
}
