import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/data.json'

const Details = () => {
  return (
    <div className='flex flex-col items-center gap-20 mx-6 my-10 lg:mx-20'>
      <div className='self-start'>
        <Link to="/" className='box-shadow flex items-center gap-2 rounded-sm bg-white py-2 px-8 dark:bg-[#2B3844] dark:text-white'>
            <ion-icon name="arrow-back"></ion-icon>
            Back
        </Link>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between w-full gap-8 dark:text-white'>
        <div>
            <img className='rounded-lg lg:w-[540px]' src={data[0].flags.svg} alt="" />
        </div>
        <div className='w-3/6'>
            <div className='my-6'>
                <h1 className='font-extrabold text-2xl'>Belgium</h1>
            </div>
            <div className='flex flex-col gap-12 lg:flex-row lg:justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>Belgie</p>
                </div>         
            </div>
            <div className='items-center lg:flex lg:gap-10 lg:mt-10'>
                <h1 className='font-semibold text-lg mb-4 lg:mb-0'>Border Countries:</h1>
                <div className='flex flex-wrap gap-2'>
                    <span className='flex justify-center items-center py-2 w-[7rem] box-shadow rounded-sm text-sm dark:bg-[#2B3844]'>France</span>
                    <span className='flex justify-center items-center py-2 w-[7rem] box-shadow rounded-sm text-sm dark:bg-[#2B3844]'>France</span>
                    <span className='flex justify-center items-center py-2 w-[7rem] box-shadow rounded-sm text-sm dark:bg-[#2B3844]'>Netherlands</span>
                </div>
            </div>
        </div>
      </div>   
    </div>
  )
}

export default Details
