import React from 'react'

export default function Items({Links,title}) {
  return (
    <div>
        <ul>
            <h1 className='mb-1 font-semibold text-4xl text-primary-green'>{title}</h1>
            {Links.map(link =>(
                <li key={link.name}>
                    <a href={link.link} className='md:text-2xl text-xl cursor-pointer text-primary-blue
                     hover:text-primary-purple'>{link.name}</a>
                </li>
            ))}
        </ul>
    </div>
    )
}
