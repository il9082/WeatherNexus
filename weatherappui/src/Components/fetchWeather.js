
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL_API = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY= '1f7cd593b7063fcfb3a0355bc482e6f9'


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    } ).catch(err => console.log(err));
    return data;
}
export const fetchForecast = async (query) => {
    const { data } = await axios.get(FORECAST_URL_API, {
        params: {
            lat:query.coord.lat.toFixed(2),
            lon:query.coord.lon.toFixed(2),
            appid: API_KEY,
        }
    }
    ).catch(err => console.log(err));
    return data;
}
