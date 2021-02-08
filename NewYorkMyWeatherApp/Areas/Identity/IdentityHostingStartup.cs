using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NewYorkMyWeatherApp.Data;
using NewYorkMyWeatherApp.Models;

[assembly: HostingStartup(typeof(NewYorkMyWeatherApp.Areas.Identity.IdentityHostingStartup))]
namespace NewYorkMyWeatherApp.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}