import React from "react";

interface Props {
    Text: string,
    lat: number,
    lng: number
}

const BreweryMapMarker: React.FC<Props> = ({ Text }) => {

    return (
        <div>{Text}</div>
    );
};

export default BreweryMapMarker;