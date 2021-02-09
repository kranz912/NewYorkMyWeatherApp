using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using NewYorkMyWeatherApp.Models;

namespace NewYorkMyWeatherApp.Services
{
  public class WeatherGovAPIService
  {
    public async Task<Forecast> GetWeatherPeriod(int period =3)
    {
      using(var httpClient = new HttpClient())
      {
        httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "me@kranznikolai.com");
        using (var response = await httpClient.GetAsync("https://api.weather.gov/gridpoints/TOP/33,36/forecast"))
        {
          string apiResponse = await response.Content.ReadAsStringAsync();
          return JsonConvert.DeserializeObject<Forecast>(apiResponse);
        }
      }
    }
  }
}
