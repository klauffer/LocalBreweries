import React from "react";
import { FaBeer } from 'react-icons/fa';

interface Props {
    lat: number,
    lng: number
}

const BreweryMapMarker: React.FC<Props> = () => {

    return (
        <div><FaBeer/></div>
    );
};

export default BreweryMapMarker;