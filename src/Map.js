import { indigo } from '@material-ui/core/colors';
import React from 'react';
import {MapContainer ,Marker,Circle,Popup,TileLayer} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";


function Map({center,zoom,newdata,active}) {



    



    function test (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
    
        : Math.abs(Number(labelValue));
    
    }

    
    return (
        <div className="map">

            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    
                    <Popup className="popup">
                        <img className="flag"src={newdata[1]} alt="WorldWide"/><h6 className="name">Active Cases-{test(active)}</h6>
                    </Popup>

                    <Circle
      center={center}
      color='transparent'
      fillColor='red'
      fillOpacity={0.3}
      radius={600000}
            />
                </Marker>
            </MapContainer>

        </div>
    );
};

export default Map;