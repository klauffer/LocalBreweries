import React from "react";
import { Container } from "react-bootstrap";
import { BreweriesSearchResults } from "./BreweriesSearchResults";

const BreweriesSearch: React.FC = () => {

    return (
        <Container>
            <BreweriesSearchResults SearchTerm='harrisburg'/>
        </Container>
    );
};

export default BreweriesSearch;