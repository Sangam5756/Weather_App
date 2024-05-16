import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Dummy_Weather",
    feels_like: 24.84,
    temp: 25.07,
    temp_min: 25.07,
    temp_max: 25.07,
    humidity: 25.07,
    weather: "haze",
  });

  let updateInfo = (result) =>{
    setWeatherInfo(result);

  }



  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Sangam Mundhe</h1>
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info ={weatherInfo} />
    </div>
  );
}
