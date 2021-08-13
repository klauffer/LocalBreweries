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
            var maybe = await _mediator.Send(new SearchCommandler.BrewerySearchRequest(city));
            return maybe.Match(Enumerable.Empty<Brewery>(), breweries => breweries.ToApiModel());
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(Brewery), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get(int id)
        {
            var maybe = await _mediator.Send(new GetCommandler.GetBreweryRequest(id));
            return maybe.Match<IActionResult>(NotFound(), breweries => Ok(breweries.ToApiModel()));
        }
    }
}
