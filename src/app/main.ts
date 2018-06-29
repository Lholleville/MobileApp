import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {Http} from "@angular/http";
import {NavController, NavParams} from "ionic-angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DetailPage} from "../pages/detail/detail";

platformBrowserDynamic().bootstrapModule(AppModule);

export class dataSet{

  public constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }
}
