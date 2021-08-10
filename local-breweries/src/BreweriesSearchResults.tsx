import React, { useState, useEffect } from "react";
import OpenBreweryService from "./services/openBrewery.service"
import IBrewerySummary from "./types/brewerySummary.type";
import BrewerySearchResult from "./BrewerySearchResult";

interface Props {
    SearchTerm: string
}

const defaultBreweries: IBrewerySummary[] = [];

export const BreweriesSearchResults: React.FC<Props> = ({SearchTerm}) => {
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
        <div>
            {SearchTerm}
            <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
              <BrewerySearchResult BrewerySummary={brewery} />
          </li>
        ))}
      </ul>

        </div>
    );
};