import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

Countries.propTypes = {
    countries: PropTypes.array.isRequired,
};

function Countries({countries}) {

    return (
        <>
            {countries.length > 10 ? 
                <p>Too many countries, please add search filter.</p>
            :
                <ul>{countries.map(country => 
                    (<li key={country.numericCode}> 
                        <Country  
                            name={country.name} 
                            flag={country.flag} 
                            capital={country.capital}
                            languages={country.languages}
                            population={country.population}
                        />
                    </li>)
                )} </ul>
            }
        </>
        
    );
}

export default Countries;