import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

Countries.propTypes = {
    countries: PropTypes.array.isRequired,
};

function Countries({countries}) {
    return (
        <ul>{countries.map(country => <Country key={country.numericCode} name={country.name}/>)}</ul>
    );
}

export default Countries;