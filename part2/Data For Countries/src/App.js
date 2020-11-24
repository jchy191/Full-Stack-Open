import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Countries from './Components/Countries';
import './App.css';
import SearchForm from './Components/SearchForm';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all', {timeout: 100000})
      .then(response => {
        console.log("success!");
        setCountries(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const countriesToShow = countries.filter(country => new RegExp(`^${searchValue}`, 'i').test(country.name));
  
  return (
    <div className="App">
      <h1>Country Data</h1>
      <SearchForm handleChange={handleChange} searchValue={searchValue}/>
      <Countries countries={countriesToShow}/>
    </div>
  );
}

export default App;
