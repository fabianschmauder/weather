import React from "react";
import {Marker} from "react-leaflet";
import {divIcon} from "leaflet";

export default class WeatherMarker extends React.Component {

    render() {
        const data = this.props.data;
        const position = [data.location.longitude, data.location.latitude];
        const icon = divIcon({className: '',
            iconSize: [50, 50],
            html: `<img alt="weather" src=icon/${data.type}.svg>`
                });
        return (
            <Marker position={position} icon={icon}>
            </Marker>
        );


    }
}