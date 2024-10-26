using MafiaProject.Application.interfaces;
using MafiaProject.Application.Services;
using MafiaProject.Core.Interfaces;
using MafiaProject.Infrastructure.Mapper;
using MafiaProject.Server.middleware;

namespace MafiaProject.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // репозитории
            // builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

            // маппер
            builder.Services.AddScoped<IMapperClass, Mapper>();
            builder.Services.AddAutoMapper(typeof(UserMappingProfile));

            // инъекция зависимостей
            builder.Services.AddScoped<IUserService, UserService>();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();
            app.UseAuthorization();

            app.UseMiddleware<ExceptionHandlingMiddleware>();

            app.MapControllers();
            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}