using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NewYorkMyWeatherApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NewYorkMyWeatherApp.Services;
namespace NewYorkMyWeatherApp.Controllers
{
  [Authorize]
  [ApiController]
  [Route("[controller]")]
  public class WeatherForecastController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        WeatherGovAPIService weatherGovAPIService = new WeatherGovAPIService();

        return Ok(await weatherGovAPIService.GetWeatherPeriod());
      }
      catch(Exception ex)
      {
        _logger.LogError(ex.Message);
        return BadRequest();
      }

    }
  }
}
