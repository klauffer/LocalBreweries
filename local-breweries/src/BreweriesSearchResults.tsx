import React, { useState, useEffect } from "react";
import OpenBreweryService from "./services/openBrewery.service"
import IBrewerySummary from "./types/brewerySummary.type";

interface Props {
    SearchTerm: string
}

const defaultBreweries: IBrewerySummary[] = [];

export const BreweriesSearchResults: React.FC<Props> = ({SearchTerm}) => {
    const [breweries, setBreweries]: [IBrewerySummary[], (breweries: IBrewerySummary[]) => void] = useState(
        defaultBreweries
    );

    useEffect(() => {
        OpenBreweryService.get()
        .then(brewerySummaries => {
            setBreweries(brewerySummaries);
        });
    }, []);


    return (
        <div>
            {SearchTerm}
            <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
              <h2>{brewery.Name}</h2>
            <h3>{brewery.BreweryType}</h3>
            <p>{brewery.URL}</p>
          </li>
        ))}
      </ul>

        </div>
    );
};