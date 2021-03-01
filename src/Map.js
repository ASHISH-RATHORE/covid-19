
import React,{useEffect,useState} from 'react';
import {MapContainer ,Marker,Circle,Popup,TileLayer} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import icon from '../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../node_modules/leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';




function Map({center,zoom,newdata,active}) {


   

    

 

console.log('data',newdata,newdata[1]);

    



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
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    
    
    return (
        <div className="map">

            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    
                    <Popup className="popup">
                        {
                            (newdata[1] != undefined) ? <img className="flag" height="20" width="25" src={newdata[1]} alt="WorldWide"/> 
                            : <img className="flag"src={newdata.flag} alt="WorldWide" height="20" width="25" />
                        }

                        {/* { if(newdata[1]!= undefined){
                            <img className="flag"src={newdata[1]} alt="WorldWide"/>
                        }else{
                            <img className="flag"src={newdata.flag} alt="WorldWide"/>     
                        }} */}
                        <h6 className="name">Active Cases-{test(active)}</h6>
                    </Popup>

                    <Circle
      
      
      center={center}
      
      
      
      />
                </Marker>
            </MapContainer>

        </div>
    );
};

export default Map;