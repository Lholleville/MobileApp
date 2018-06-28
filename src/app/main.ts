import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {Http} from "@angular/http";
import {NavController, NavParams} from "ionic-angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DetailPage} from "../pages/detail/detail";

platformBrowserDynamic().bootstrapModule(AppModule);

export class dataSet{
  devicesList: any[];


  public devicesListGenerator() {
    this.devicesList = [];
    this.devicesList.push({
      presenceSensor: this.getRndInteger(10, 75),
      temperatureSensor: this.getRndInteger(5, 50),
      lightSensor: this.getRndInteger(5, 15),
      atmosphericPressureSensor: this.getRndInteger(1, 10),
      humiditySensor: this.getRndInteger(1, 25),
      soundLevelSensor: this.getRndInteger(10, 45),
      GPSSensor: this.getRndInteger(5, 20),
      CO2LevelSensor: this.getRndInteger(5, 25),
      LED: this.getRndInteger(25, 100),
      Beeper: this.getRndInteger(25, 100)
    });
    return this.devicesList;
  }

  getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1))+min;
  }

  item: any;
  devices: any;
  public items: any;

  public constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // this.getRemoteData();
    this.item = this.navParams.get('item');
    this.devices = [];
  }

  public itemSelected(device){
    this.navCtrl.push(DetailPage, {device: device});
  }

  public loadData(url) {
    let data:Observable<any>;
    data = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    });
  }
}
