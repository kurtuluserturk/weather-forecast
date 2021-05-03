import React from 'react'

const Weather = ({ weather }) => {

    if (!weather) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>{weather.name}</h2>
            <h3>{weather.weather.map(data => data.description)}</h3>
            <p>{weather.main.temp} °C</p>
            <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default Weather
