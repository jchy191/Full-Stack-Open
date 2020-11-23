import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Countries from './Components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
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
      <form>
        <label>Find Countries:</label><input value={searchValue} onChange={handleChange}/>
      </form>
      {countriesToShow.length <= 10 ? <p>Less than 10 countries</p> : <p>More than 10 countries</p>}
      <Countries countries={countriesToShow}/>
    </div>
  );
}

export default App;
