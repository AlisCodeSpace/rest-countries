import React from 'react'
import data from '../../data/data.json'

import { Link } from 'react-router-dom'

const Flag = () => {
  return (
    <Link to="/details" className='flex flex-col w-[320px] bg-white drop-shadow-sm rounded-lg overflow-hidden dark:bg-[#2B3844] dark:text-white cursor-pointer lg:max-w-[264px]'>
        <div>
            <img src={data[0].flags.png} alt="Flag" />
        </div>
        <div className='px-8 py-6'>
            <h1 className='font-extrabold text-lg mb-3'>United States of America</h1>
            <div className='flex flex-col gap-1'>
                <p className='font-light'><span className='font-semibold'>Population:{' '}</span>323,947,000</p>
                <p className='font-light'><span className='font-semibold'>Region:{' '}</span>America</p>
                <p className='font-light'><span className='font-semibold'>Capital:{' '}</span>Washington, D.C.</p>
            </div>
        </div>
    </Link>
  )
}

export default Flag
