using System.Net.Http;
using System.Threading.Tasks;
using LocalBreweries.Api;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Xunit;
using System.Text.Json;
using System.Collections.Generic;

namespace LocalBreweries.Tests.Integration
{
    public class BreweryControllerShould
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;

        private readonly JsonSerializerOptions _jsonSerializerOptions = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase  };

        public BreweryControllerShould()
        {
            // Arrange
            _server = new TestServer(new WebHostBuilder()
               .UseStartup<Startup>());
            _client = _server.CreateClient();
        }

        [Fact]
        public async Task FindGetByCity()
        {
            var city = "harrisburg";
            var response = await _client.GetAsync($"/Brewery?city={city}");
            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();
            var breweries = JsonSerializer.Deserialize<IEnumerable<Api.Breweries.Brewery>>(responseJson, _jsonSerializerOptions);

            Assert.Contains(breweries, x => x.City == city);
        }

        [Fact]
        public async Task FindGetById()
        {
            var id = 10;
            var response = await _client.GetAsync($"/Brewery/{id}");
            response.EnsureSuccessStatusCode();
            var responseJson = await response.Content.ReadAsStringAsync();
            var brewery = JsonSerializer.Deserialize<Api.Breweries.Brewery>(responseJson, _jsonSerializerOptions);
            Assert.Equal(id, brewery.Id);
        }
    }
}
