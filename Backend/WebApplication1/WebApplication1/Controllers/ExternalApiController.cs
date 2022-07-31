using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class ExternalApiController : ControllerBase
{
    private readonly HttpClient _client;
    /// <summary />
    public ExternalApiController(IHttpClientFactory clientFactory)
    {
        if (clientFactory is null)
        {
            throw new ArgumentNullException(nameof(clientFactory));
        }
        _client = clientFactory.CreateClient("reddit");
    }
    /// <summary>
    /// Gets the raw JSON for the hot feed in reddit
    /// </summary>
    /// <returns>A JSON object representing the hot feed in reddit</returns>
    [HttpGet]
    [Route("raw")]
    [ProducesResponseType(200)]
    public async Task<IActionResult> GetRawRedditHotPosts()
    {
        var res = await _client.GetAsync("/votes?videoId=kxOuG8jMIgI");
        var content = await res.Content.ReadAsStringAsync();
        return Ok(content);
    }
}