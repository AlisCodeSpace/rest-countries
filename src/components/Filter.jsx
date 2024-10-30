import React, { useState } from 'react'

const Filter = () => {
    const [showRegions, setShowRegions] = useState(false)

    const handleShowRegions = () => {
        setShowRegions(prevShowState => !prevShowState)
    }
  return (
    <div className='relative my-10 mx-6 flex flex-col gap-3 w-[12.5rem]'>
      <button onClick={handleShowRegions} className='button flex items-center justify-between drop-shadow-lg bg-white rounded-md py-4 px-4 font-light dark:bg-[#2B3844] dark:text-white'>
        Filter by Region 
        {!showRegions ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}
      </button>
      <div className={`${!showRegions ? 'opacity-0' : 'opacity-100'} bg-white flex flex-col px-4 drop-shadow-lg rounded-md py-4 gap-2 transition-all ease-in-out duration-150 absolute top-[4rem] w-full z-50 dark:bg-[#2B3844] dark:text-white`}>
        <span>Africa</span>
        <span>America</span>
        <span>Asia</span>
        <span>Oceania</span>
        <span>Europe</span>
      </div>
    </div>
  )
}

export default Filter
