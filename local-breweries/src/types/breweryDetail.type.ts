import IAddress from "./address.type";

export default interface IBreweryDetail {
    id: number,
    Name: string,
    Address: IAddress,
    Longitude: string,
    Latitude: string
  }