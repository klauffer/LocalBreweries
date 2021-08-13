using System.Collections.Generic;
using System.Linq;

namespace LocalBreweries.Api.Breweries
{
    public class Brewery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string PhoneNumber { get; set; }
        public string Url { get; set; }
    }

    internal static class Mappers
    {
        public static Brewery ToApiModel(this Service.Breweries.Queries.Brewery serviceBrewery) =>
        new Brewery()
        {
            Id = serviceBrewery.Id,
            Name = serviceBrewery.Name,
            Type = serviceBrewery.Type,
            Street = serviceBrewery.Address.Street,
            City = serviceBrewery.Address.City,
            State = serviceBrewery.Address.State,
            Zip = serviceBrewery.Address.Zip,
            Country = serviceBrewery.Address.Country,
            PhoneNumber = serviceBrewery.PhoneNumber,
            Url = serviceBrewery.Url,
            Latitude = serviceBrewery.Coordinate.Latitude,
            Longitude = serviceBrewery.Coordinate.Longitude
        };

        public static IEnumerable<Brewery> ToApiModel(this IEnumerable<Service.Breweries.Queries.Brewery> serviceBreweries) =>
            serviceBreweries.Select(ToApiModel);
    }
}
