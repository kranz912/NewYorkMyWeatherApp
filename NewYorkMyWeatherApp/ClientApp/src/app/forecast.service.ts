import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public Forecast(): Observable<Forecast> {
    return this.requestForecast();
  }

  private requestForecast() {
    return this.http.get<Forecast>(this.baseUrl + 'weatherforecast').pipe(map(r => r));
  }


}
export interface Forecast{
  properties: Properties
}
interface Properties {
  periods: Array<Period>
}
export interface Period {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDayTime: boolean;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  shortForecast: string;
  icon: string;
}
