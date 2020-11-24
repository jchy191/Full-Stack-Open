import React from 'react';

function WeatherInfo({weather, capital}) {
    const {weather_icons, weather_descriptions, temperature} = weather;
    return (
        <>
            <h3>Weather in {`${capital}`}:</h3>
            <p>Temperature: {temperature} degrees Celsius</p>
            <p>Weather Description: {weather_descriptions[0]}</p>
            <img src={weather_icons[0]} alt={`The weather of ${capital}`} width="100"></img>
        </>
    )
}

export default WeatherInfo;