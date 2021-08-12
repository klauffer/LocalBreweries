import React from "react";
import ICoordinate from "./types/coordinate.type";
import { Container } from "react-bootstrap";

interface Props {
    Coordinate: ICoordinate
 };



const BreweryMap: React.FC<Props> = ({ Coordinate }) => {
    return (
        <Container>
            <div>{Coordinate.Latitude}</div>
            <div>{Coordinate.Longitude}</div>
        </Container>
    );
};

export default BreweryMap;