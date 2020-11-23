import React, {useState} from 'react';

function Country(props) {

    const [isOpen, setIsOpen]= useState(false);
    
    return (
        <>
            <h3>{props.name} <button onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? "Hide" : "Show"}</button></h3>
            {isOpen && <CountryCard {...props}/>}
        </>

    )
}

function CountryCard({name, capital, flag, languages, population}) {

    return (
        <div className="country-card">
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

