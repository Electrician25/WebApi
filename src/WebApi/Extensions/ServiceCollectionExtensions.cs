using WebApi.CrudServices;

namespace WebApi.ServiceCollectionExtensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCategoryCrudServices(this IServiceCollection services)
        {
            services.AddTransient<BlogCrud>()
                    .AddTransient<PostCrud>();

            return services;
        }
    }
}
