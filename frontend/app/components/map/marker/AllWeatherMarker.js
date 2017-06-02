import React from "react";
import WeatherMarker from "./WeatherMarker";
import {connect} from "react-redux";

@connect((store) => {
    return {
        weatherMarker: store.weatherMarker
    };
})
export default class AllWeatherMarker extends React.Component {

    render() {
        const marker = [];
        this.props.weatherMarker.forEach((weatherData) =>
            marker.push(<WeatherMarker key={weatherData.id} data={weatherData}>
        </WeatherMarker>));

        return (
            <div>
                {marker}
            </div>
        );
    }
}