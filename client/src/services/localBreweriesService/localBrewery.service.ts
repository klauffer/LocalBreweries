import { Client, IBrewery } from "./localBrewery.generated.client";
import IService from "../service.type";
import IBrewerySummary from "../../types/brewerySummary.type";
import IAddress from "../../types/address.type";
import IBreweryDetail from "../../types/breweryDetail.type";
import ICoordinate from "../../types/coordinate.type";

class LocalBreweryService implements IService {

    private client: Client;

    constructor() {
        const baseUrl = this.GetDomain();
        this.client = new Client(baseUrl);
    }

    GetDomain() : string {
        if(process.env.REACT_APP_LOCAL_BREWERY_DOMAIN !== undefined){
            return process.env.REACT_APP_LOCAL_BREWERY_DOMAIN;
        }
        return "";
    }

    async getByCity(cityName: string) : Promise<IBrewerySummary[]> {
        const breweries = await this.client.breweryAll(cityName);
        return breweries.map(brewery => this.toSummary(brewery))
    }

    async getById(id: string) : Promise<IBreweryDetail> {
        const brewery = await this.client.brewery(+id);
        return this.toDetails(brewery);
    }

    private toSummary(brewery: IBrewery) : IBrewerySummary {
        return {
            id: brewery.id ? brewery.id : 0,
            Name: brewery.name ? brewery.name : "",
            BreweryType: brewery.type ? brewery.type : "",
            URL: brewery.url ? brewery.url : "",
            Address: this.toAddress(brewery.street, brewery.city, brewery.state, brewery.zip)
        };
    }

    private toDetails(brewery: IBrewery) : IBreweryDetail {
        return {
            id: brewery.id ? brewery.id : 0,
            Name: brewery.name ? brewery.name : "",
            Address: this.toAddress(brewery.street, brewery.city, brewery.state, brewery.zip),
            Coordinate: this.toCoordinate(brewery.latitude, brewery.longitude)
        };
    }

    private toAddress(street: string|undefined, city: string|undefined, state: string|undefined, zip: string|undefined) : IAddress {
        return{
            Street: street ? street : "",
            City: city ? city : "",
            State: state ? state : "",
            Zip: zip ? zip : ""
        };
    }

    private toCoordinate(latitude: number|undefined, longitude: number|undefined) : ICoordinate{
        return {
            Latitude: latitude ? latitude.toString() : "",
            Longitude: longitude ? longitude.toString() : ""
        };
    }
}

export default new LocalBreweryService();