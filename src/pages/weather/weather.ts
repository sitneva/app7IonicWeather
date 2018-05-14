import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {WeatherService} from "../../app/services/weather.service";
import 'rxjs/Rx';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  country:String;
  city:String;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.city = "Boston";
    this.country= "MA";
  }

  ngOnInit(){
    this.weatherService.getWeather(this.country, this.city)
      .subscribe(result => {
        console.log(result.json())
      })

  }

}
