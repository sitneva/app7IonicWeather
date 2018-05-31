import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable ()
export class WeatherService{
  http:any;
  apiKey:string;
  conditionsUrl:string;
  searchUrl:String;


  constructor(http:Http){
    this.http = http;
    this.apiKey = "06922eb1541048bb";
    this.conditionsUrl = "http://api.wunderground.com/api/"+this.apiKey+"/conditions/q/";
    this.searchUrl = "http://localhost:8100/search/aq?query="

  }

  getWeather(zmw){
    return this.http.get(this.conditionsUrl+  "zmw:" + zmw + ".json")

  }

  searchCities(serchStr){
    return this.http.get(this.searchUrl+serchStr)
  }

}
