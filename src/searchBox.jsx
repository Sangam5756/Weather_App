import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  const api = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "2b9fb5b0adc8572560f05c96fb2a3c58";

  let [city, setCity] = useState("");
  let [error, SetError] = useState(false)

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${api}?q=${city}&appid=${api_key}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        temp_min: jsonresponse.main.temp_min,
        temp_max: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feels_like: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
       throw error;
    }
  };

  function handlechange(event) {
    setCity(event.target.value);
  }

  let handlesubmit = async (event) => {

    try {
        event.preventDefault();
        console.log(city);
        setCity("");
        SetError(false);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch (error) {
        SetError(true)
        
    }

   
  };
  return (
    <>
      <div className="search">
        <form action="" onSubmit={handlesubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            onChange={handlechange}
            required
            value={city}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            search
          </Button>
          {error &&  <p style={{color:"red"}}>No such place exists</p>}
        </form>
      </div>
    </>
  );
}
