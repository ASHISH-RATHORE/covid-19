import { indigo } from '@material-ui/core/colors';
import React from 'react';
import {MapContainer ,Marker,Circle,Popup,TileLayer} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";


function Map({center,zoom,newdata}) {



    

    console.log(newdata);
    return (
        <div className="map">

            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup className="popup">
                        <h5 className="name">{newdata[0]}</h5><img className="flag"src={newdata[1]} alt="india"/>
                    </Popup>

                    <Circle
      center={center}
      color='red'
      fillColor='red'
      fillOpacity={0.4}
      radius={500000}
            />
                </Marker>
            </MapContainer>

        </div>
    );
};

export default Map;