import React, { useState, useRef } from "react";
import ICoordinate from "./types/coordinate.type";
import GoogleMapReact from 'google-map-react';
import BreweryMapMarker from "./BreweryMapMarker";

interface Props {
    Coordinate: ICoordinate
};

const BreweryMap: React.FC<Props> = ({ Coordinate }) => {
    const mapRef = useRef(null);
    
    const [position, setPosition] = useState({
        lat: +Coordinate.Latitude,
        lng: +Coordinate.Longitude
    });

    function handleLoad(map : any) {
        mapRef.current = map;
        setPosition({
            lat: +Coordinate.Latitude,
            lng: +Coordinate.Longitude
        });
      }


    function GetAPIKey() : string {
        if(process.env.REACT_APP_GOOGLE_MAP_API_KEY !== undefined){
            return process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        }
        return "";
    }

    return (
        <div>
            <div style={{ height: '50vh', width: '50%' }}>
                <GoogleMapReact
                    onGoogleApiLoaded={handleLoad}
                    bootstrapURLKeys={{ key: GetAPIKey() }}
                    center={position}
                    defaultZoom={15}>
                    <BreweryMapMarker lat={+Coordinate.Latitude} lng={+Coordinate.Longitude}  />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default BreweryMap;