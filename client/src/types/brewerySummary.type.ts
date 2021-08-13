import IAddress from "./address.type";

export default interface IBrewerySummary {
  id: number,
  Name: string,
  BreweryType: string,
  Address: IAddress,
  URL: string | null,
}