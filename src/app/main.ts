import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {Http} from "@angular/http";
import {NavController} from "ionic-angular";

platformBrowserDynamic().bootstrapModule(AppModule);

export class dataSet{
  devicesList: any[];

  devicesListGenerator() {

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
    })
  }

  getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1))+min;
  }
}
