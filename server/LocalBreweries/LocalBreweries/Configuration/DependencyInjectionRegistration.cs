using LocalBreweries.Data;
using Microsoft.Extensions.DependencyInjection;

namespace LocalBreweries.Api.Configuration
{
    public static class DependencyInjectionRegistration
    {

        public static void BootstrapDIMappings(this IServiceCollection services)
        {
            services.RegisterData();
        }
    }
}
