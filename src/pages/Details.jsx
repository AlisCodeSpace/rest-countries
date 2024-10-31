import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CountriesContext } from '../contexts/CountriesContext';

const Details = () => {
  const { countries, getCountryInfo } = useContext(CountriesContext);
  const countryInfo = getCountryInfo() || JSON.parse(localStorage.getItem('selectedCountry'))

  const navigate = useNavigate()

  if (!countryInfo) {
    return (
      <div>
        <h1 className='m-8 text-4xl dark:text-white'>Please select a country from the main page to view this page.</h1>
        <Link to="/" className='m-8 box-shadow w-[140px] flex items-center gap-2 rounded-sm bg-white py-2 px-8 dark:bg-[#2B3844] dark:text-white'>
          <ion-icon name="arrow-back"></ion-icon>
          Back
        </Link>
      </div>
    )
  }
 
  const currencies = Object.keys(countryInfo?.currencies).map(currencyCode => {
    return countryInfo?.currencies[currencyCode].name
  })

  const languages = Object.keys(countryInfo?.languages).map(languageCode => countryInfo?.languages[languageCode]).join(', ')

  const getBorderCountryNames = (borders, countries) => {
    if (!borders || borders.length === 0) return 'No bordering countries';
  
    return borders
      .map(borderCode => {
        const borderCountry = countries.find(country => country.cca3 === borderCode);
        return borderCountry ? (
          <span
            key={borderCode} // Use the border code as a unique key
            className="flex justify-center items-center py-1 px-2 box-shadow rounded-sm text-xs dark:bg-[#2B3844]"
          >
            {borderCountry.name.common}
          </span>
        ) : null;
      })
      .filter(Boolean); 
  };

  const borderCountries = getBorderCountryNames(countryInfo.borders, countries);

  const handleBack = () => {
    localStorage.removeItem('selectedCountry')
    navigate('/')
  }
  
  return (
    <div className='flex flex-col items-center gap-14 mx-6 my-10 lg:mx-20'>
      <div className='self-start'>
        <button onClick={handleBack} className='box-shadow flex items-center gap-2 rounded-sm bg-white py-2 px-8 dark:bg-[#2B3844] dark:text-white'>
            <ion-icon name="arrow-back"></ion-icon>
            Back
        </button>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between w-full gap-8 dark:text-white'>
        <div className='flex items-center'>
            <img className='rounded-lg lg:w-[540px]' src={countryInfo.flags.svg} alt="" />
        </div>
        <div className='lg:w-3/5'>
            <div className='my-6'>
                <h1 className='font-extrabold text-2xl'>{countryInfo.name.common}</h1>
            </div>
            <div className='flex flex-col gap-12 lg:flex-row lg:justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-light'><span className='font-semibold'>Native Name:{' '}</span>{countryInfo.name.official}</p>
                    <p className='font-light'><span className='font-semibold'>Population:{' '}</span>{countryInfo.population}</p>
                    <p className='font-light'><span className='font-semibold'>Region:{' '}</span>{countryInfo.region}</p>
                    <p className='font-light'><span className='font-semibold'>Sub Region:{' '}</span>{countryInfo.subregion}</p>
                    <p className='font-light'><span className='font-semibold'>Capital:{' '}</span>{countryInfo.capital}</p>
                </div>
                <div className='flex flex-col gap-2 lg:w-3/6'>
                    <p className='font-light'><span className='font-semibold'>Top Level Domain:{' '}</span>{countryInfo.tld[0]}</p>
                    <p className='font-light'><span className='font-semibold'>Currencies:{' '}</span>{currencies}</p>
                    <p className='font-light'><span className='font-semibold'>Languages:{' '}</span>{languages}</p>
                </div>         
            </div>
            <div className='items-center lg:flex lg:gap-10 mt-10 w-full'>
                <h1 className='font-semibold mb-4 lg:mb-0'>Border Countries:</h1>
                <div className='flex flex-wrap gap-2'>
                    {borderCountries}
                </div>
            </div>
        </div>
      </div>   
    </div>
  )
}

export default Details
