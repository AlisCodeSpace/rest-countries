import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the context
export const CountriesContext = createContext();

// Create the provider component
export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [randomCountries, setRandomCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterOption, setFilterOption] = useState('')

  const searchedCountries = countries.filter(country => searchQuery ?
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) : null
  );

  const filteredCountries = countries.filter(country => filterOption ? 
    country.region.toLowerCase().includes(filterOption.toLowerCase()) : null
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/independent?status=true');
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching countries data');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      // Shuffle countries and slice the first 20
      const shuffledCountries = countries
        .sort(() => 0.5 - Math.random()) // Shuffle the array
        .slice(0, 12); // Take the first 20
      setRandomCountries(shuffledCountries); // Set the state with 20 random countries
    }
  }, [countries]);

  const handleSelectCountry = (id) => {
    setSelectedCountry(id)

    const countryData = randomCountries.find(country => country.cca3 === id);
    if (countryData) {
      localStorage.setItem('selectedCountry', JSON.stringify(countryData));
    }
  }

  const getCountryInfo = () => {
    return countries.find(country => country.cca3 === selectedCountry)
  }

  return (
    <CountriesContext.Provider value={{ countries, randomCountries, loading, error, getCountryInfo, handleSelectCountry, setSearchQuery, searchedCountries, filteredCountries, filterOption, setFilterOption }}>
      {children}
    </CountriesContext.Provider>
  );
};
