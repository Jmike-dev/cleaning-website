import React from 'react'

export default function About() {
  return (
   <>
  {/* about parent div container */}
  <div className=" md:w-full bg-primary-purple my-2 rounded-xl">
    {/*  about child div container*/}
    <div>
      {/* h1 div container */}
      <div classname="px-16 md:px-64 " >
      <br />
       <hr className="w-3/5" />
       <h1 className="w-1/2 mt-6 text-5xl font-headline tracking-tight font-extrabold text-primary-black leading-snug">
         What do we do <br />
         <span className="text-primary-blue w-1/2">Our job is to clean your home as well as you do.</span>
       </h1>
      </div>
       {/* p div container */}
      <div>
       <p className="w-3/5 mt-2 text-primary-black text-lg" >
        If your job is very busy and you are tired of cleaning your home then "name of the business" is for you.</p>
      </div>

       </div>
  </div>

  </>
  )
}
