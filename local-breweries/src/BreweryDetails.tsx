import React from "react";
import { Container } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";

type BreweryDetailParams = {
    id: string; 
  };
type BreweryDetailProps = RouteComponentProps<BreweryDetailParams>;


const BreweryDetail: React.FC<BreweryDetailProps> = ({ match }) => {

    return (
        <Container>
            <div>ID: {match.params.id}</div>
        </Container>
    );
};

export default withRouter(BreweryDetail);