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
            public Task<MaybeResult<Brewery>> Handle(GetBreweryRequest request, CancellationToken cancellationToken)
            {
                MaybeResult<Brewery> result = new MaybeResult<Brewery>.Nothing();
                if (request.Id % 2 == 0)//if number is even
                {
                    result = new MaybeResult<Brewery>.Just(new Brewery(
                    id: request.Id,
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
}
