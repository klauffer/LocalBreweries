import React, { useState, useEffect } from "react";
import OpenBreweryService from "./services/openBrewery.service"
import IBrewerySummary from "./types/brewerySummary.type";
import BrewerySearchResult from "./BrewerySearchResult";
import { Container, Row, CardGroup, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-bootstrap/lib/Navbar";

interface Props {
    SearchTerm: string
}

const defaultBreweries: IBrewerySummary[] = [];

export const BreweriesSearchResults: React.FC<Props> = ({ SearchTerm }) => {
    const [breweries, setBreweries]: [IBrewerySummary[], (breweries: IBrewerySummary[]) => void] = useState(
        defaultBreweries
    );

    useEffect(() => {
        OpenBreweryService.getByCity(SearchTerm)
            .then(brewerySummaries => {
                setBreweries(brewerySummaries);
            });
    }, []);


    return (
        <Container>
            {SearchTerm}
            <Row xs={1} md={2} className="g-4">
            {breweries.map((brewery) => (
                <Col key={brewery.id}>
                <Card>
                    <Card.Header>
                    <Card.Title>{ brewery.Name }</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary" href="#">Go to Details</Button>
                    <Button variant="secondary" href={ brewery.URL ? brewery.URL : "" }>Go to Website</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>

        </Container>
    );
};