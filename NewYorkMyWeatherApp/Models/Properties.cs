using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewYorkMyWeatherApp.Models
{
  public class Properties
  {
    public Properties()
    {
      Periods = new HashSet<Period>();
    }
    public DateTime Updated { get; set; }
    public string Units { get; set; }
    public ICollection<Period> Periods { get; set; }
  }
}
