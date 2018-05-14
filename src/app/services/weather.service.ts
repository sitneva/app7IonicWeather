import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable ()
export class WeatherService{
  http:any;
  apiKey:string;
  conditionsUrl:string;


  constructor(http:Http){
    this.http = http;
    this.apiKey = "06922eb1541048bb";
    this.conditionsUrl = "http://api.wunderground.com/api/"+this.apiKey+"/conditions/q/";

  }

    getWeather(country, city){
      return this.http.get(this.conditionsUrl+country+"/"+city+".json")
        
    }

}
