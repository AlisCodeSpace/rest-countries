import React from 'react'
import DarkModeBtn from './DarkModeBtn'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full px-4 py-8 shadow-md bg-white dark:bg-[#2B3844]'>
      <h1 className='font-semibold dark:text-white'>Where in the world?</h1>
      <DarkModeBtn />
    </nav>
  )
}

export default Navbar
