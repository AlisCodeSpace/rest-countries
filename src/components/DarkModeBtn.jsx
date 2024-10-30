import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <button onClick={toggleDarkMode} className='flex justify-center items-center gap-2 dark:text-white'>
      {darkMode ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="moon"></ion-icon>}
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default DarkModeBtn
