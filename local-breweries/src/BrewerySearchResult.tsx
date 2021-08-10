import React from "react";
import IBrewerySummary from "./types/brewerySummary.type";

interface Props {
    BrewerySummary: IBrewerySummary
}


export const BrewerySearchResult: React.FC<Props> = ({BrewerySummary}) => {
    return (
        <div>
            <h2>{BrewerySummary.Name}</h2>
            <h3>{BrewerySummary.BreweryType}</h3>
            <p>{BrewerySummary.URL}</p>
        </div>
    );
};

export default BrewerySearchResult;