using Microsoft.AspNetCore.Mvc;

namespace MyStudents.Controllers;

/// <summary>
/// Controller to interact with youtube dislike API
/// </summary>
[ApiController]
[Route("[controller]")]
public class YoutubeDislikeController : ControllerBase
{
    private readonly HttpClient _client;
    
    public YoutubeDislikeController(IHttpClientFactory clientFactory)
    {
        if (clientFactory is null)
        {
            throw new ArgumentNullException(nameof(clientFactory));
        }
        _client = clientFactory.CreateClient("yt_dislike");
    }
    
    /// <summary>
    /// Get dislikes, likes and views from a youtube video
    /// </summary>
    /// <param name="videoID"></param>
    /// <returns></returns>
    [HttpGet()]
    [Route("video")]
    [ProducesResponseType(200)]
    public async Task<IActionResult> GetVideoDetails(string videoID)
    {
        
        var res = await _client.GetAsync($"/votes?videoId={videoID}");
        var content = await res.Content.ReadAsStringAsync();
        return Ok(content);
    }
    
    /// <summary>
    /// Tests the connection to the Youtube dislike API
    /// </summary>
    /// <returns></returns>
    [HttpGet()]
    [Route("test")]
    [ProducesResponseType(200)]
    public async Task<IActionResult> GetDiagonostics( )
    {
        var res = await _client.GetAsync("/api/diagnostics");
        var content = await res.Content.ReadAsStringAsync();
        return Ok(content);
    }
    
}