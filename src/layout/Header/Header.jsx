import React from 'react'
// import Button from '../Footer/components/Button'
import { useState } from 'react'
import { Routes,Link, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Services from '../../pages/Services/Services'
import About from '../../pages/About/About'

export default function Header
() {
  const links = [
    {name: 'Home', link:'/'},
    {name: 'Service', link:'/services'},
    {name: 'About', link:'/about'}
  ]

let [open, setOpen ] = useState (false)

  return (
    <>
     {/* parent div */}
    <div className=' w-full fixed top-0 left-0  '>
      {/* child div */}
      <div className='md:flex items-center justify-between shadow-lg  bg-primary-purple mb-32  md:py-4 md:px-10 px-7'>
        {/* logo div */}
        <div className='font-bold text-2xl cursor-pointer flex item-center font-serif text-primary-black'>
          <span className='text-3xl text-primary-blue mr-1 pt-2'>
            <ion-icon name="logo-soundcloud"></ion-icon>
          </span>
          cleaning
        </div>
        {/* mobile div menu button */}
        <div onClick={() => setOpen (!open)} 
        className='text-3xl relative left-72 bottom-8 sm:hidden'>
          <ion-icon  name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul 
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary-purple md:z-auto left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20': '-top-96'}`}>
                      {
                        links.map(link =>(
                          <li key={link.name} className='liButton'>
                            <Link to={link.link}>
                            <a href={link.link} className='aButton'>{link.name}</a>
                            </Link>
                          </li>
                        ))
                      }

          {/* <Button></Button> */}
        </ul>
      </div>
    </div>
{/* define the routes */}
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  )
}