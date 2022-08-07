using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MyStudents.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Add In built memory DB
builder.Services.AddDbContext<StudentContext>(opt => opt.UseInMemoryDatabase("Student"));

// Setup XML tags
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "My student API",
        Description = "Example of Rest API for MSA 2022"
    });

    // using System.Reflection; Add the <summary> tags to swagger
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
    
});

// Inject youtube dislike URI
builder.Services.AddHttpClient("yt_dislike", configureClient: client =>
{
    client.BaseAddress = new Uri("https://returnyoutubedislikeapi.com");
});

// Get appsetting config settings
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