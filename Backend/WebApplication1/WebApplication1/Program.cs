using System.Configuration;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using NuGet.Configuration;
using WebApplication1.model;

using Microsoft.Extensions.Configuration;
using WebApplication1;


var builder = WebApplication.CreateBuilder(args);
// https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// Connect DB 
builder.Services.AddDbContext<TodoContext>(opt =>
    opt.UseInMemoryDatabase("TodoList"));

// Dependency Injection. Link reddit with this URI
builder.Services.AddHttpClient("reddit",
    client => { client.BaseAddress = new Uri("https://returnyoutubedislikeapi.com"); });

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "My Api TiTLE",
        Description = "Looky description"
    });

    // using System.Reflection; Add the <summary> tags to swagger
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});



// DEMO DiFFERENT PROFILES https://www.daveabrock.com/2021/01/19/config-top-level-programs/
var config = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.Development.json")
    .Build();
// ALL WE DO IS CHANGE ADDJSONFILE TO CHANGE APPSETTINGS
var region = config["Region"];
var key = config["Key"];
Console.WriteLine($"APP PROFILE DEMO: Starting server in {region}!");
Console.WriteLine($"Using Key {key}!");



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();