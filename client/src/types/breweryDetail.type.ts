import IAddress from "./address.type";
import ICoordinate from "./coordinate.type";

export default interface IBreweryDetail {
  id: number,
  Name: string,
  Address: IAddress,
  Coordinate: ICoordinate
}