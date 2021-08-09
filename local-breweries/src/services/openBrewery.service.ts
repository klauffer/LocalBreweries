import api from "./openBrewery.connection"
import IBrewerySummary from "../types/brewerySummary.type";
import IAddress from "../types/address.type";
import { stat } from "fs";

interface IBrewery {
    id: number,
    name: string,
    brewery_type: string,
    street: string,
    address_2: string | null,
    address_3: string | null,
    city: string,
    state: string,
    county_province: string | null,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    updated_at: Date,
    created_at: Date
  }

class OpenBreweryService {
    async get() : Promise<IBrewerySummary[]> {
        const breweries = await api.get<IBrewery[]>(`/breweries`);
        return breweries.data.map(brewery => this.toSummary(brewery))
    }

    private toSummary(brewery: IBrewery) : IBrewerySummary {
        return {
            id: brewery.id,
            Name: brewery.name,
            BreweryType: brewery.brewery_type,
            URL: brewery.website_url,
            Address: this.toAddress(brewery.street, brewery.city, brewery.state, brewery.postal_code)
        };
    }

    private toAddress(street: string, city: string, state: string, zip: string) : IAddress {
        return{
            Street: street,
            City: city,
            State: state,
            Zip: zip
        };
    }
}

export default new OpenBreweryService();