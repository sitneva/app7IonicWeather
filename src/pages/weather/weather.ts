import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {WeatherService} from "../../app/services/weather.service";
import 'rxjs/Rx';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather:any;
  searchStr:String;
  results:any;
  zmw:any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit(){
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
      .subscribe(result => {
        this.weather = result.json().current_observation;
        console.log(result.json())
      })
  }

  getDefaultCity(){
    this.zmw = '00000.25.33345';
    if(localStorage.getItem('location') !== null){
      this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    }
  }

  getQuery(){
    //console.log(this.searchStr);
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        console.log(res.json());
        this.results = res.json().RESULTS;
      })
  }

  chooseCity(location){
    console.log(location);
    this.results = [];
    this.searchStr = '';
    this.weatherService.getWeather(location.zmw)
      .subscribe(result => {
        this.weather = result.json().current_observation;
        console.log(result.json())
      })
  }

}
