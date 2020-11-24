import { indigo } from '@material-ui/core/colors';
import React from 'react';
import {MapContainer ,Marker,Popup,TileLayer} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";


function Map({center,zoom}) {
    return (
        <div className="map">

            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>
                    
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    );
};

export default Map;