using System;
using System.Collections.Generic;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LocalBreweries.Service.Breweries.Queries;
using LocalBreweries.Api.Breweries;
using System.Threading.Tasks;

namespace LocalBreweries.Api.Breweries
{
    [ApiController]
    [Route("[controller]")]
    public class BreweryController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BreweryController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet()]
        [ProducesResponseType(typeof(IEnumerable<Brewery>), StatusCodes.Status200OK)]
        public async Task<IEnumerable<Brewery>> Get([FromQuery] string city)
        {
            var request = new SearchCommandler.BrewerySearchRequest(city);
            var maybe = await _mediator.Send(request);
            return maybe.Match(Enumerable.Empty<Brewery>(), breweries => breweries.From());
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(Brewery), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public Brewery Get(int id) =>
            new Brewery
            {
                Id = id,
                Name = "Moe's",
                PhoneNumber = "867-5309",
                Type = "Fictional",
                Url = "https://github.com/klauffer",
                Street = "700 Evergreen Terrace",
                City = "Springfield",
                Country = "US",
                State = "PA",
                Zip = "12345",
                Latitude = 40.291059,
                Longitude = -76.8816961,
            };
    }
}
