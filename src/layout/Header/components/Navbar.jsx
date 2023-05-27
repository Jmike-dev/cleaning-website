import React from 'react'
import { useState } from 'react'
import { Routes,Link, Route } from 'react-router-dom'
import Home from '../../../pages/Home/Home'
import Services from '../../../pages/Services/Services'
import About from '../../../pages/About/About'

export default function Navbar() {
  const links = [
     {name: 'Home', link:'/'},
     {name: 'Service', link:'/services'},
     {name: 'About', link:'/about'}
   ]
 
 let [open, setOpen ] = useState (false)
  return (
    <>
     {/* parent div */}
    <div className=' w-full top-0 left-0  '>
      {/* child div */}
      <div className='md:flex items-center justify-between shadow-lg  bg-primary-purple md:py-4 md:px-10 px-7'>
        {/* logo div */}
        <div className='font-bold text-2xl cursor-pointer flex item-center font-san text-primary-black'>
          <span className='text-3xl text-primary-blue mr-1 pt-2'>
            <ion-icon name="logo-soundcloud"></ion-icon>
          </span>
          cleaning
        </div>
        {/* mobile div menu button */}
        <div onClick={() => setOpen (!open)} 
        className='text-3xl relative left-2 bottom-4 sm:hidden  pl-72'>
          <ion-icon  name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul 
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary-purple md:z-auto left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20': '-top-96'}`}>
                      {
                        links.map(link =>(
                          <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
                            <Link to={link.link}>
                            <a href={link.link} className='py-2 px-2 bg-primary-blue rounded-lg text-primary-black 
                            hover:bg-primary-green hover:text-primary-black font-san  duration-700 ease-in-out hover:-translate-y-3 '>{link.name}</a>
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

