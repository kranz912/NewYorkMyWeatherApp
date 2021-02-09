using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewYorkMyWeatherApp.Models
{
  public class Period
  {
    public int Number { get; set; }
    public string Name { get; set; }
    public DateTime startTime { get; set; }
    public DateTime endTime { get; set; }
    public bool IsDaytime { get; set; }
    public decimal Temperature { get; set; }
    public string TemperatureUnit { get; set; }
    public string WindSpeed { get; set; }
    public string WindDirection { get; set; }


  }
}
