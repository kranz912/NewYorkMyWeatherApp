import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Forecast, ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  public periods: Observable<Array<any>>;
  constructor(private forecastService: ForecastService ) { }

  ngOnInit(): void {
    this.periods = this.forecastService.Forecast().pipe(map(p => {
      console.log(p);
      return p.properties.periods
    }));
    console.log(this.periods);
  }

}
