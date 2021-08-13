using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FunkyBasics.Maybe;
using MediatR;

namespace LocalBreweries.Service.Breweries.Queries
{
    public class SearchCommandler
    {
        public class BrewerySearchRequest : IRequest<MaybeResult<IEnumerable<Brewery>>> 
        {
            public BrewerySearchRequest(string city)
            {
                City = city;
            }

            public string City { get; }
        }

        public class BrewerySearchHandler : IRequestHandler<BrewerySearchRequest, MaybeResult<IEnumerable<Brewery>>>
        {
            public Task<MaybeResult<IEnumerable<Brewery>>> Handle(BrewerySearchRequest request, CancellationToken cancellationToken)
            {
                var breweries = Enumerable.Range(1, 5).Select(index => new Brewery(
                    id: index,
                    name: "Moe's",
                    phoneNumber: "867-5309",
                    type: "Fictional",
                    url: "https://github.com/klauffer",
                    address: new Address("700 Evergreen Terrace", request.City, "PA", "12345", "US"),
                    coordinate: new Coordinate(40.291059, -76.8816961)
                ))
                .ToList();

                MaybeResult<IEnumerable<Brewery>> result = new MaybeResult<IEnumerable<Brewery>>.Just(breweries);
                return Task.FromResult(result);
            }
        }
    }
}
