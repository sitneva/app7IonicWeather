import { Component } from '@angular/core';

import {SettingsPage} from "../settings/settings";
import {WeatherPage} from "../weather/weather";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WeatherPage;
  tab2Root = SettingsPage;


  constructor() {

  }
}
