# NewYorkMyWeatherApp

## Prerequisites
1. .Net5
2. SendGrid Api Keys
3. AngularCLI

## Installation

Run on Visual Studio Package Manager
```
Add-Migration Initialize
Update-Database
```

Run the following on commandline

Installing sendGridKeys
```
dotnet user-secrets set SendGridUser NoReply --project .\NewYorkMyWeatherApp
dotnet user-secrets set SendGridKey <sendgridkey>--project .\NewYorkMyWeatherApp
```

Default username: me@kranznikolai.com
Default password: s2mqkRmms9923n!#



