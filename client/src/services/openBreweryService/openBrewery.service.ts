import api from "./openBrewery.connection"
import IBrewerySummary from "../../types/brewerySummary.type";
import IAddress from "../../types/address.type";
import IBreweryDetail from "../../types/breweryDetail.type";
import ICoordinate from "../../types/coordinate.type";
import IService from "../service.type";

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

class OpenBreweryService implements IService {
    async getByCity(cityName: string) : Promise<IBrewerySummary[]> {
        const breweries = await api.get<IBrewery[]>(`/breweries?by_city=${cityName}`);
        return breweries.data.map(brewery => this.toSummary(brewery))
    }

    async getById(id: string) : Promise<IBreweryDetail> {
        const brewery = await api.get<IBrewery>(`/breweries/${id}`);
        return this.toDetails(brewery.data);
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

    private toDetails(brewery: IBrewery) : IBreweryDetail {
        return {
            id: brewery.id,
            Name: brewery.name,
            Address: this.toAddress(brewery.street, brewery.city, brewery.state, brewery.postal_code),
            Coordinate: this.toCoordinate(brewery.latitude, brewery.longitude)
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

    private toCoordinate(latitude: string, longitude: string) : ICoordinate{
        return {
            Latitude: latitude,
            Longitude: longitude
        };
    }
}

export default new OpenBreweryService();