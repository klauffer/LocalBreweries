using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace LocalBreweries.Api.Configuration
{
    internal static class Cors
    {
        static readonly string MyAllowSpecificOrigins = "allowSpecificOrigins";

        public static void AddCorsPolicy(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000");
                                  });
            });
        }

        public static void AddCorsMiddleware(this IApplicationBuilder app)
        {
            app.UseCors(MyAllowSpecificOrigins);
        }
    }
}
