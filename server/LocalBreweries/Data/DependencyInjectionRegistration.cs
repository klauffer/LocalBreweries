using LocalBreweries.Service.Breweries;
using Microsoft.Extensions.DependencyInjection;

namespace LocalBreweries.Data
{
    public static class DependencyInjectionRegistration
    {
        public static void RegisterData(this IServiceCollection services)
        {
            services.AddTransient<IBreweryRepository, InMemoryRepository>();
        }
    }
}
