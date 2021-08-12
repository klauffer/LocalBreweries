import React, { useState, useEffect } from "react";
import OpenBreweryService from "./services/openBrewery.service"
import { Container } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import IBreweryDetail from "./types/breweryDetail.type";
import Address from "./Address";

type BreweryDetailParams = {
    id: string;
};

interface Props extends RouteComponentProps<BreweryDetailParams> { };

const defaultBreweryDetail: IBreweryDetail = {
    id:0,
    Name:"N/A",
    Latitude:"0",
    Longitude:"0",
    Address: {
        Street: "N/A",
        City: "N/A",
        State: "N/A",
        Zip: "N/A"
    }
};

const BreweryDetail: React.FC<Props> = ({ match }) => {
    const [breweryDetail, setBreweryDetail] = useState<IBreweryDetail>(
        defaultBreweryDetail
    );

    useEffect(() => {
        OpenBreweryService.getById(match.params.id)
            .then(breweryDetail => {
                setBreweryDetail(breweryDetail);
            });
    }, [match.params.id]);

    return (
        <Container>
            <div>{breweryDetail.Name}</div>
            <div><Address Address={breweryDetail.Address} /></div>
        </Container>
    );
};

export default withRouter(BreweryDetail);