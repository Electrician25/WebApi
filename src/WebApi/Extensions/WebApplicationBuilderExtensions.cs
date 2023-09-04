using Microsoft.EntityFrameworkCore;
using WebApi.Data;

namespace StorageAPI.Extensions;

public static class WebApplicationBuilderExtensions
{
    public static WebApplicationBuilder AddApplicationContext(this WebApplicationBuilder builder)
    {
        var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<ApplicationContext>(options
                => options.UseNpgsql(connectionString));

        return builder;
    }
}