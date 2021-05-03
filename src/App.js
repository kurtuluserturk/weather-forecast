import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

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

  console.log('latitude', latitude, 'longitude', longitude, 'weather-data', weather)

  const getWeatherData = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    try {
      const { data } = await axios.get(apiUrl)
      setWeather(data)
    } catch {
      alert('error')
    }
  }

  return (
    <div className="App">
      <h1>weather forecast</h1>
    </div>
  );
}

export default App;
