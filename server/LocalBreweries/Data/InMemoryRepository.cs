using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FunkyBasics.Maybe;
using LocalBreweries.Service.Breweries;
using LocalBreweries.Service.Breweries.Queries;

namespace LocalBreweries.Data
{
    public class InMemoryRepository : IBreweryRepository
    {
        public Task<MaybeResult<IEnumerable<Brewery>>> Search(string city)
        {
            var breweries = Enumerable.Range(1, 5).Select(index => new Brewery(
                    id: index,
                    name: "Moe's",
                    phoneNumber: "867-5309",
                    type: "Fictional",
                    url: "https://github.com/klauffer",
                    address: new Address("700 Evergreen Terrace", city, "PA", "12345", "US"),
                    coordinate: new Coordinate(40.291059, -76.8816961)
                ))
                .ToList();
            MaybeResult<IEnumerable<Brewery>> result = new MaybeResult<IEnumerable<Brewery>>.Just(breweries);
            return Task.FromResult(result);
        }

        Task<MaybeResult<Brewery>> IBreweryRepository.GetBrewery(int Id)
        {
            MaybeResult<Brewery> result = new MaybeResult<Brewery>.Nothing();
            if (Id % 2 == 0)//if number is even
            {
                result = new MaybeResult<Brewery>.Just(new Brewery(
                id: Id,
                name: "Moe's",
                phoneNumber: "867-5309",
                type: "Fictional",
                url: "https://github.com/klauffer",
                address: new Address("700 Evergreen Terrace", "Springfield", "PA", "12345", "US"),
                coordinate: new Coordinate(40.291059, -76.8816961)));
            }
            return Task.FromResult(result);
        }
    }
}
