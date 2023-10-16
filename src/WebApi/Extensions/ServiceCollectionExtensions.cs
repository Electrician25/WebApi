using WebApi.CrudServices;
using WebApi.Entities;

namespace WebApi.ServiceCollectionExtensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCategoryCrudServices(this IServiceCollection services)
        {
            services.AddTransient<BlogCrud>()
                    .AddTransient<PostCrud>()
                    .AddTransient<Errors<Exception,object>>();

            return services;
        }
    }
}
