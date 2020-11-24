import React from 'react';
import WeatherInfo from './WeatherInfo.js'

function CountryCard({name, capital, flag, languages, population, weather}) {
    console.log(weather)

    return (
        <div className="country-card">
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Languages:</p>
            <ul>
                {languages.map((language, i) => <li key={i}>{language.name}</li>)}
            </ul>
            <h3>Flag of {`${name}`}:</h3>
            <img src={flag} alt={`The flag of ${name}`} width="200"></img>
            {Object.keys(weather).length ? <WeatherInfo weather={weather} capital={capital}/> : null}
        </div>
        
    );
}

export default CountryCard;