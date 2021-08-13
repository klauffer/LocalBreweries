import IService from "./service.type";
import OpenBreweryService from "./openBreweryService/openBrewery.service";
import LocalBreweryService from "./localBreweriesService/localBrewery.service";

export enum Services {
    localBrewery,
    openBrewery
  }

// this factory is a singleton.
class ServiceFactory {
    private services : Services
    private static instance: ServiceFactory;

    // private contructor to for access through the getInstance controller
    private constructor() {
        this.services = Services.localBrewery
    }

    // this controls access to the single instance
    public static GetInstance(): ServiceFactory {
        if (!ServiceFactory.instance) {
            ServiceFactory.instance = new ServiceFactory();
        }
        return ServiceFactory.instance;
    }

    SetService(services: Services) : void {
        this.services = services;
    }

    GetService() : IService {
        switch (this.services) {
            case Services.localBrewery:
              return LocalBreweryService;
            case Services.openBrewery:
              return OpenBreweryService;
          }
    }
}

export default ServiceFactory.GetInstance();