import React from 'react';

function Country({name, capital, flag, languages, population}) {
    return (
        <div className="country">
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Languages:</p>
            <ul>
                {languages.map((language, i) => <li key={i}>{language.name}</li>)}
            </ul>
            <img src={flag} alt={`The flag of ${name}`} width="400"></img>

        </div>
        
    );
}

export default Country;