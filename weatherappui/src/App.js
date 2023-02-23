import React, { useState } from 'react';

import './App.css';
import {fetchWeather} from "./Components/fetchWeather";
import Forecast from "./Components/Forecast";

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
        }
    }
    return (

        <div className="main-container">
            <input type="text" className="search"  placeholder="Rochester"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search} style={{ fontSize: "20px", color:"black" }}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round((weather.main.temp * 1.8) + 32)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="Feels Like">
                        <p>Feels Like {Math.round((weather.main.feels_like * 1.8) + 32)}
                            <sup>&deg;F</sup>     </p>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            <Forecast ForecastData={weather}></Forecast>
        </div>
    );
}

export default App;