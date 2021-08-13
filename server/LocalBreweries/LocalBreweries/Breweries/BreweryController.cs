﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LocalBreweries.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BreweryController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<BreweryController> _logger;

        public BreweryController(ILogger<BreweryController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Brewery>), StatusCodes.Status200OK)]
        public IEnumerable<Brewery> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Brewery
            {
                Id = index,
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
            })
            .ToList();
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