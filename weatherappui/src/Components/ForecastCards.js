import React, { Component } from 'react';

class ForecastCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: [],
        };
    }

    getWeather = () => {
        const unfiltered = this.props.Daily
        const filtered = []
        console.log(unfiltered)
        // const c = unfiltered.map((data) => {
        //     data.weather[0].description
        // })
    };

    decideWeather = (e) => {
        console.log(e);
    };

    render() {
        console.log(this.props.Daily);
        return (
            <div>
                <p>{this.getWeather()}</p>
                <p>hi</p>
            </div>
        );
    }
}

export default ForecastCards;
