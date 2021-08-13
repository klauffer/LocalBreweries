using System.Threading;
using System.Threading.Tasks;
using FunkyBasics.Maybe;
using MediatR;

namespace LocalBreweries.Service.Breweries.Queries
{
    public class GetCommandler
    {
        public class GetBreweryRequest : IRequest<MaybeResult<Brewery>>
        {
            public GetBreweryRequest(int id)
            {
                Id = id;
            }

            public int Id { get; }
        }

        public class GetBreweryHandler : IRequestHandler<GetBreweryRequest, MaybeResult<Brewery>>
        {
            private readonly IBreweryRepository _breweryRepository;

            public GetBreweryHandler(IBreweryRepository breweryRepository)
            {
                _breweryRepository = breweryRepository;
            }

            public async Task<MaybeResult<Brewery>> Handle(GetBreweryRequest request, CancellationToken cancellationToken) =>
                await _breweryRepository.GetBrewery(request.Id);

        }
    }
}
