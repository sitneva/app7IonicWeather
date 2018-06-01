import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from "../../app/services/weather.service";
import {WeatherPage} from "../weather/weather";

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  searchStr: String;
  results: any;
  defaultCity: any;
  zmw: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getDefaultCity()
  }

  getDefaultCity(){
    this.defaultCity = '';
    if(localStorage.getItem('location') !== null){
      this.defaultCity = JSON.parse(localStorage.getItem('location')).name;
    }


  }

  getQuery() {
    //console.log(this.searchStr);
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        console.log(res.json());
        this.results = res.json().RESULTS;
      })
  }

  chooseDedefaultCity(location) {
    this.results = [];
    localStorage.setItem('location', JSON.stringify(location));
    this.searchStr = location.name;
    this.getDefaultCity();
  }

  saveChanges(){
    this.navCtrl.push(WeatherPage);
  }
}
