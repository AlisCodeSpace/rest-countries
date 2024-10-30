import React from 'react'
import Flag from './Flag'

const Flags = () => {
  return (
    <div className='my-6 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-14 w-full'>
      <Flag />
      <Flag />
      <Flag />
      <Flag />
      <Flag />
    </div>
  )
}

export default Flags
