import React, { useContext } from 'react'
import Flag from './Flag'

import { CountriesContext } from '../../contexts/CountriesContext';

const Flags = () => {
  const { randomCountries, filteredCountries, searchedCountries, loading, error } = useContext(CountriesContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderAllCountries = randomCountries.map((country) => {
    return (
    <Flag 
      key={country.cca3} 
      id={country.cca3} 
      flag={country.flags.png} 
      name={country.name.common} 
      population={country.population}
      region={country.region} 
      capital={country.capital}
    />
  )})

  const renderSearchedCountries = searchedCountries.map((country) => {
    return (
      <Flag 
        key={country.cca3} 
        id={country.cca3} 
        flag={country.flags.png} 
        name={country.name.common} 
        population={country.population}
        region={country.region} 
        capital={country.capital}
      />
    )
  })

  const renderFilteredCountries = filteredCountries.map((country) => {
    return (
      <Flag 
        key={country.cca3} 
        id={country.cca3} 
        flag={country.flags.png} 
        name={country.name.common} 
        population={country.population}
        region={country.region} 
        capital={country.capital}
      />
    )
  })

  const renderCountries = () => {
    if (searchedCountries && searchedCountries.length > 0) 
      return renderSearchedCountries;
    else if (filteredCountries && filteredCountries.length > 0)
      return renderFilteredCountries;
    else {
      return renderAllCountries;
    }
  }; 

  console.log(searchedCountries)


  return (
    <div className='my-6 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-14 w-full'>
      {renderCountries()}
    </div>
  )
}

export default Flags
