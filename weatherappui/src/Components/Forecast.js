import { fetchForecast } from "./fetchWeather";
import ForecastCards from "./ForecastCards";
import React from "react";

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: [],
            error: null,
        };
    }

    UpdateData = () => {
        fetchForecast(this.props.ForecastData)
            .then((data) => {
                const ForecastData = [];
                for (let i = 0; i < 5; i++) {
                    const startIndex = i * 8;
                    const endIndex = startIndex + 8;
                    const dayData = data.list.slice(startIndex, endIndex);
                    ForecastData.push(dayData);
                }
                this.setState({ forecastData: ForecastData });
            })
            .catch((error) => {
                this.setState({ error: error.message });
            });
    }

    ProcessData = () => {
        const unfiltered_data = this.state.forecastData
        const filtered_data = unfiltered_data.map((data) => {
            data.weather[0].description
        })
        return filtered_data
    }


    componentDidMount() {
        this.UpdateData()
    }


    render() {
        const error = this.state.error;
        if (error) {
            // console.log(error);
        }
        console.log(this.state.forecastData[0]);
        console.log(this.state.forecastData[0]);

        return (
            <div>
                <p></p>
                <ForecastCards Daily={this.state.forecastData[0]} />
                {/*<ForecastCards forecast={this.state.forecastData[1]} />*/}
                {/*<ForecastCards forecast={this.state.forecastData[2]} />*/}
                {/*<ForecastCards forecast={this.state.forecastData[3]} />*/}
                {/*<ForecastCards forecast={this.state.forecastData[4]} />*/}
            </div>
        );
    }
}

export default Forecast;
