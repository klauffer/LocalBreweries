using System.Collections.Generic;
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
            private readonly IBreweryRepository _breweryRepository;

            public BrewerySearchHandler(IBreweryRepository breweryRepository)
            {
                _breweryRepository = breweryRepository;
            }

            public Task<MaybeResult<IEnumerable<Brewery>>> Handle(BrewerySearchRequest request, CancellationToken cancellationToken) =>
                _breweryRepository.Search(request.City);
        }
    }
}
