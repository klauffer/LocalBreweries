import React from "react";
import IBrewerySummary from "./types/brewerySummary.type";
import { Card, Button, Col } from "react-bootstrap";
import Address from "./Address";

interface Props {
    BrewerySummary: IBrewerySummary
}


export const BrewerySearchResult: React.FC<Props> = ({ BrewerySummary }) => {
    return (
        <Col key={BrewerySummary.id}>
            <Card>
                <Card.Header>
                    <Card.Title>{BrewerySummary.Name}</Card.Title>
                </Card.Header>
                <Card.Body>

                    <Card.Text>
                        {BrewerySummary.BreweryType}
                        <Address Address={BrewerySummary.Address} />
                    </Card.Text>
                    <div>
                        <Button variant="primary" href={`/Brewery/${BrewerySummary.id}`}>Go to Details</Button>
                        <Button variant="secondary" href={BrewerySummary.URL ? BrewerySummary.URL : ""}>Go to Website</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BrewerySearchResult;