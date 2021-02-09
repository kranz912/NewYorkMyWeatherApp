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
  public periodNumber: number;
  constructor(private forecastService: ForecastService ) { }

  ngOnInit(): void {
    this.periods = this.forecastService.Forecast().pipe(map(p => {
      console.log(p);
      return p.properties.periods
    }));
    this.periodNumber = 3;
  }
  refereshPeriodNumber(number, $event) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");

      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
    this.periodNumber = number;
  }

}
