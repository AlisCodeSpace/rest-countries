import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CountriesContext } from '../../contexts/CountriesContext'

const Flag = ({ id, flag, name, population, region, capital}) => {
  const { handleSelectCountry } = useContext(CountriesContext)
  
  return (
    <Link to="/details" onClick={() => handleSelectCountry(id)} className='flex flex-col w-[320px] bg-white drop-shadow-sm rounded-lg overflow-hidden dark:bg-[#2B3844] dark:text-white cursor-pointer lg:max-w-[264px]'>
        <div>
            <img src={flag} className='min-h-[170px] w-full max-h-[170px]' alt={`Flag of ${name}`} />
        </div>
        <div className='px-8 py-6'>
            <h1 className='font-extrabold text-lg mb-3'>{name}</h1>
            <div className='flex flex-col gap-1'>
                <p className='font-light'><span className='font-semibold'>Population:{' '}</span>{population}</p>
                <p className='font-light'><span className='font-semibold'>Region:{' '}</span>{region}</p>
                <p className='font-light'><span className='font-semibold'>Capital:{' '}</span>{capital}</p>
            </div>
        </div>
    </Link>
  )
}

export default Flag
