import React from 'react'

import Search from '../components/Search'
import Filter from '../components/Filter'
import Flags from '../components/Flags/Flags'

const Main = () => {
  return (
    <div>
      <div className='lg:mx-14 flex flex-col lg:flex-row lg:justify-between'>
        <Search />
        <Filter />
      </div>
      <Flags />
    </div>
  )
}

export default Main
