import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital, weather }) => {
  if (!weather) {
    return <p>Loading weather data...</p>
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather.main.temp} Celsius</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

const CountryDetails = ({ country, weather }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>capital {country.capital?.[0]}</p>
    <p>area {country.area}</p>
    <h3>languages:</h3>
    <ul>
      {Object.values(country.languages || {}).map(lang => 
        <li key={lang}>{lang}</li>
      )}
    </ul>
    <img 
      src={country.flags.png} 
      alt={`flag of ${country.name.common}`}
      width="150"
    />
    {country.capital && (
      <Weather capital={country.capital[0]} weather={weather} />
    )}
  </div>
)

const CountryList = ({ countries, handleShow }) => (
  <div>
    {countries.map(country => 
      <div key={country.cca3}>
        {country.name.common} 
        <button onClick={() => handleShow(country.name.common)}>show</button>
      </div>
    )}
  </div>
)

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null)

  const api_key = import.meta.env.VITE_WEATHER_KEY

  useEffect(() => {
    if (search) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          const filtered = response.data.filter(country =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          setCountries(filtered)
        })
    } else {
      setCountries([])
    }
  }, [search])

  useEffect(() => {
    if (countries.length === 1 && countries[0].capital && api_key) {
      const capital = countries[0].capital[0]
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => {
          console.log('Weather API not ready yet or error:', error.response?.status)
          setWeather(null)
        })
    } else {
      setWeather(null)
    }
  }, [countries, api_key])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleShow = (countryName) => {
    setSearch(countryName)
  }

  if (countries.length > 10) {
    return (
      <div>
        <div>
          find countries <input value={search} onChange={handleSearchChange} />
        </div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  if (countries.length > 1) {
    return (
      <div>
        <div>
          find countries <input value={search} onChange={handleSearchChange} />
        </div>
        <CountryList countries={countries} handleShow={handleShow} />
      </div>
    )
  }

  if (countries.length === 1) {
    return (
      <div>
        <div>
          find countries <input value={search} onChange={handleSearchChange} />
        </div>
        <CountryDetails country={countries[0]} weather={weather} />
      </div>
    )
  }

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
    </div>
  )
}

export default App