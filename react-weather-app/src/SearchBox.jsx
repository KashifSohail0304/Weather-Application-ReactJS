import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './SearchBox.css';
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "14b02e385a3f3ecafe3acf3da2ea38fe";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }

    function handleChange(evt) {
        setCity(evt.target.value);
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
           console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
        } catch(err) {
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Search City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br></br> <br></br>
                <Button variant="contained" type="submit">Search</Button>
            {
                error && <p style={{color: "red"}}>No such place exists!</p>
            }    
            </form>
        </div>
    )
}