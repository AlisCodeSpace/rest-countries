import React, { useContext, useState } from 'react'
import { CountriesContext } from '../contexts/CountriesContext'

const Filter = () => {
    const { filterOption, setFilterOption } = useContext(CountriesContext)
    const [showRegions, setShowRegions] = useState(false)

    const handleShowRegions = () => {
        setShowRegions(prevShowState => !prevShowState)
    }

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const handleFilter = (region) => {
      setFilterOption(region)
      setShowRegions(false)
    }
   
    const renderRegions = regions.map((region, index) => {
      return <span className='cursor-pointer' key={index} onClick={() => handleFilter(region)}>{region}</span>
    })

  return (
    <div className='relative my-10 mx-6 flex flex-col gap-3 w-[12.5rem]'>
      <button onClick={handleShowRegions} className='button flex items-center justify-between drop-shadow-lg bg-white rounded-md py-4 px-4 font-light dark:bg-[#2B3844] dark:text-white'>
        {filterOption ? filterOption : 'Filter by Region'} 
        {!showRegions ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}
      </button>
      <div className={`${!showRegions ? 'opacity-0' : 'opacity-100'} bg-white flex flex-col px-4 drop-shadow-lg rounded-md py-4 gap-2 transition-all ease-in-out duration-150 absolute top-[4rem] w-full z-50 dark:bg-[#2B3844] dark:text-white`}>
        {renderRegions}
      </div>
    </div>
  )
}

export default Filter
