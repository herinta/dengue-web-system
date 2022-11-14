import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Circle, CircleMarker, Popup } from 'react-leaflet'
import "./MapCity.css"
import 'leaflet/dist/leaflet.css';

const MapsCity = () => {
    
    const position = [-7.004279411254011, 110.43937778492932]

    const redOptions = { color: 'red' }
    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Circle center={position} pathOptions={redOptions} radius={460}>
                <Popup>Popup in CircleMarker</Popup>
            </Circle>
        </MapContainer>
        </>
    )
}

export default MapsCity;