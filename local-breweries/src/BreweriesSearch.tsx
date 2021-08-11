import React from "react";
import { Container } from "react-bootstrap";
import { BreweriesSearchResults } from "./BreweriesSearchResults";
import { withRouter } from 'react-router';


const BreweriesSearch: React.FC = () => {

    return (
        <Container>
            <BreweriesSearchResults SearchTerm='harrisburg'/>
        </Container>
    );
};

export default withRouter(BreweriesSearch);