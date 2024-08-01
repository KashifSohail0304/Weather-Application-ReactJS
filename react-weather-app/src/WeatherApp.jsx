import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 31.2,
        humidity: 94,
        temp: 27.01,
        tempMax: 27.01,
        tempMin: 27.01,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}