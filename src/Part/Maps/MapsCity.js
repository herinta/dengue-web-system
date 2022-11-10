import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const MapsCity = () => {
    const [center, setCenter] = useState({lat: -7.005983210868973, lng: 110.44452762620924});
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();


    return (
        <>
            <MapContainer center={[-7.005983210868973, 110.44452762620924]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rQXwzm1Bam663jFQ8kds"
                />
                
            </MapContainer>
        </>
    )
}

export default MapsCity;