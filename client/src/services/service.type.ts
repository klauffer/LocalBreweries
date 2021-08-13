import IBrewerySummary from "../types/brewerySummary.type";
import IBreweryDetail from "../types/breweryDetail.type";

export default interface IService{
    getByCity: (cityName: string) => Promise<IBrewerySummary[]>
    getById: (id: string) => Promise<IBreweryDetail>
  }