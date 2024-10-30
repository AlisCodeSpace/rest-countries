import React from 'react'

const Search = () => {
  return (
    <div className='search mt-10 mx-6 flex items-center gap-6 py-4 px-8 drop-shadow-lg rounded-md bg-white dark:bg-[#2B3844] lg:w-[480px] lg:max-h-[60px]'>
      <ion-icon size="" name="search"></ion-icon>
      <input type="text" placeholder='Search for a country...' className='focus:outline-none bg-transparent dark:text-white'/>
    </div>
  )
}

export default Search
