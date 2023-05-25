import React from 'react'
import ItemContainer from './components/ItemContainer'
import { Icons } from './components/FooterMenu'
import SocialIcons from './components/SocialIcons'

export default function Footer() {
  return (
    <footer className='bg-primary-black rounded-2xl w-full md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
        <ItemContainer/>
        <SocialIcons Icons={Icons}/>
    </footer>
  )
}
