import React, {useState} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function Country(props) {

    const {name, capital} = props;

    const [isOpen, setIsOpen]= useState(false);
    const [weather, setWeather] = useState({});

    const handleButton = () => {
        if(isOpen){
            setIsOpen(false);
            return;
        } else {
            openCountryCard();
        }
    }

    const openCountryCard = () => {
        const api_key = process.env.REACT_APP_API_KEY;
        axios 
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
                const {weather_icons, weather_descriptions, temperature} = response.data.current;
                setWeather({weather_icons, weather_descriptions, temperature})
                setIsOpen(true);
            })
            .catch(error => {
                console.log(error);
                setIsOpen(true);
            })
    }
    
    return (
        <>
            <h2>{name} <button onClick={handleButton}>{isOpen ? "Hide" : "Show"}</button></h2>
            {isOpen && <CountryCard weather={weather} {...props}/>}
        </>

    )
}


export default Country;

