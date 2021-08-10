import React from "react";
import IBrewerySummary from "./types/brewerySummary.type";
import { Card, Button } from "react-bootstrap";

interface Props {
    BrewerySummary: IBrewerySummary
}


export const BrewerySearchResult: React.FC<Props> = ({ BrewerySummary }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{BrewerySummary.Name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">See More!</Button>
            </Card.Body>
        </Card>
    );
};

export default BrewerySearchResult;