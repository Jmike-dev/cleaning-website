import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import IMAGES from '../../../assets/images/images'
import { useNavigate } from 'react-router-dom'
export default function HomeFooter() {

  const slides = [
    {url: IMAGES.slide1, title:'What do we do?'},
    {url: IMAGES.slide2, title: 'We clean your house as well as you do'}
  ]
  const [currentslide, setCurrentSlide] = useState(0)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/services')
  }


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
      <div className='md:max-w-[1080px] md:h-[780px] h-96 w-3/4 m-auto py-16 px-4 md:ml-10  ml-5' >
        {/* slide div */}
          <div 
          style={{backgroundImage: `url(${slides[currentslide].url})`}}
          className='w-40 md:w-full h-full rounded-2xl bg-center bg-cover duration-700 ' >
          </div>
          {/* left arrow */}
          <div  className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          -left-1   md:left-5 text-2xl rounded-full p-2 bg-primary-grey text-primary-blue cursor-pointer hidden '>
            <BsChevronCompactLeft onClick={prevslide} size={30} />
          </div>
          {/* right arrow */}
          <div className='md:hidden md:group-hover:block absolute md:top-[64rem] top-[33rem] -translate-x-0 translate-y-[50%] 
          -right-2 md:right-2 text-2xl rounded-full p-2  bg-primary-grey text-primary-blue cursor-pointer hidden'>
            <BsChevronCompactRight onClick={nextslide} size={30}/>
          </div>
      </div>
      {/* right text div */}
          <div className=' md:pt-80  pt-24 md:mr-7 mr-5 flex flex-col'>
            {slides.map(text => (
              <h1 key={text.title} className='text-center md:text-5xl font-san  text-primary-purple text-xl '
              >{text.title}</h1>
            ))}
              <div className='md:ml-44 md:mt-10  '>
                <button 
              onClick={handleClick}
              className='px-4 py-2 bg-primary-green text-primary-blue md:text-3xl text-xl rounded-lg inline-block hover:bg-primary-purple
               hover:text-primary-blue transition duration-500 ease-in-out hover:-translate-y-1 font-sans hover:font-serif my-3'
              > Our Services
                </button>
              </div>
          </div>
  </div>
  </>
  )
}
