import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  @Input() temperature: number;
  @Input() unit: string;
  @Input() windspeed: string;
  @Input() winddirection: string;
  @Input() shortforecast: string;
  @Input() name: string;
  public icon: string;

  constructor() { }

  ngOnInit(): void {
    if (this.shortforecast.includes('Cloudy')) {
      this.icon = 'assets/cloud.png'
    }
    if (this.shortforecast.includes('Snow')) {
      this.icon = 'assets/snow.png'
    }
    if (this.shortforecast.includes('Sunny')) {
      this.icon = 'assets/sunny.png'
    }

  
    console.log();
  }

}
