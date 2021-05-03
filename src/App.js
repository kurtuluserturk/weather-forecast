import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {

  const [weather, setWeather] = useState()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  const showPosition = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition)
    latitude && longitude && getWeatherData(latitude, longitude)
  }, [latitude, longitude])

  const getWeatherData = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    const lang = navigator.language.split("-")[0]
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${apiKey}`

    try {
      const { data } = await axios.get(apiUrl)
      setWeather(data)
    } catch {
      alert('error')
    }
  }

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
