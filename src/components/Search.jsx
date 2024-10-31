import React, { useContext } from 'react'
import { CountriesContext } from '../contexts/CountriesContext'

const Search = () => {
  const { setSearchQuery } = useContext(CountriesContext)

  return (
    <div className='search mt-10 mx-6 flex items-center gap-6 py-4 px-8 drop-shadow-lg rounded-md bg-white dark:bg-[#2B3844] lg:w-[480px] lg:max-h-[60px]'>
      <ion-icon name="search"></ion-icon>
      <input type="text" placeholder=' Search for a country...' className='w-full focus:outline-none bg-transparent dark:text-white' onChange={(e) => setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default Search
