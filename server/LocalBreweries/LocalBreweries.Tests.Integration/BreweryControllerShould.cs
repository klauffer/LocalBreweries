using System.Net.Http;
using System.Threading.Tasks;
using LocalBreweries.Api;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Xunit;

namespace LocalBreweries.Tests.Integration
{
    public class BreweryControllerShould
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;

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
            // Act
            var response = await _client.GetAsync("/Brewery?city=harrisburg");
            response.EnsureSuccessStatusCode();
        }

        [Fact]
        public async Task FindGetById()
        {
            // Act
            var response = await _client.GetAsync("/Brewery/10");
            response.EnsureSuccessStatusCode();
        }
    }
}
