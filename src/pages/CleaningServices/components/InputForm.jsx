import React from 'react'

export default function InputForm() {
  return (
    
    <div 
    className='w-80 h-96 flex flex-col justify-between items-center bg-primary-purple rounded-lg border-primary-black
     text-primary-black shadow-lg shadow-primary-blue'>
      <form className='h-52 w-full p-4 space-y-4'>
        <input type="text" placeholder='full name' className='inputClass' />
        <input type="email" placeholder='email' className='inputClass' />
        <input type="phone" placeholder='number' className='inputClass' />
        <input type="text" placeholder='location' className='inputClass' />
        <input type="date" placeholder='location' className='inputClass' />
      </form>
      <button className='px-4 py-2  bg-primary-blue text-primary-black md:text-3xl text-xl rounded-lg inline-block hover:bg-primary-green hover:text-primary-blue transition duration-500 ease-in-out hover:-translate-y-1
              font-sans hover:font-serif'>Submit</button>
    </div>
    
  )
}
