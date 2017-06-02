import React from "react";
import {connect} from "react-redux";
import {Map, TileLayer} from "react-leaflet";
import AllWeatherMarker from "./marker/AllWeatherMarker";

@connect((store) => {
    return {
        location: store.location,
        zoom: store.zoom
    };
})

export default class WeatherMap extends React.Component {


    render() {
        const center = [this.props.location.longitude, this.props.location.latitude];

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <Map center={center} zoom={this.props.zoom}>
                        <TileLayer url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                        <AllWeatherMarker/>
                    </Map>
                </div>
            </div>
        );
    }
}
