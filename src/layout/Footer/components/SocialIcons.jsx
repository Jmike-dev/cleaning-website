import React from 'react'

export default function SocialIcons({Icons}) {
  return (
    <div className='text-primary-purple '>
  {
    Icons.map(icon => (
        <span key={icon.name} 
                className='p-2 cursor-pointer inline-flex item-center rounded-full bg-primary-black mx-1.5 text-4xl hover:text-primary-green hover:bg-primary-blue'>
            <ion-icon name={icon.name}></ion-icon>
        </span>
    ))
  }
  </div>
  )
}
