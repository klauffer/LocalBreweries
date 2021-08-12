import React from "react";
import ICoordinate from "./types/coordinate.type";
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-map-react';
import BreweryMapMarker from "./BreweryMapMarker";

interface Props {
    Coordinate: ICoordinate
};

const BreweryMap: React.FC<Props> = ({ Coordinate }) => {

    function GetCenter(): GoogleMapReact.Coords {
        return {
            lat: +Coordinate.Latitude,
            lng: +Coordinate.Longitude
        }
    }

    function GetAPIKey() : string {
        if(process.env.REACT_APP_GOOGLE_MAP_API_KEY !== undefined){
            return process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        }
        return "";
    }

    return (
        <div>
            {/* {Coordinate.Latitude} , {Coordinate.Longitude}, {process.env.NODE_ENV} {process.env.REACT_APP_GOOGLE_MAP_API_KEY} */}
            <div style={{ height: '50vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GetAPIKey() }}
                    center={GetCenter()}
                    zoom={15}>
                    <BreweryMapMarker lat={+Coordinate.Latitude} lng={+Coordinate.Longitude} Text={'A'} />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default BreweryMap;