import React, { useState, useEffect } from "react";
import OpenBreweryService from "./services/openBrewery.service"
import IBrewerySummary from "./types/brewerySummary.type";
import { Container, Row } from "react-bootstrap";
import BrewerySearchResult from "./BrewerySearchResult";

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
    }, [SearchTerm]);


    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
            {breweries.map((brewery) => (
                <BrewerySearchResult key={brewery.id} BrewerySummary={brewery} />
            ))}
            </Row>

        </Container>
    );
};