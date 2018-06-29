import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { dataSet } from "../../app/main";
import {HttpClient} from "@angular/common/http";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  deviceType: any;
  deviceInfos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public dataSet: DataEngineProvider) {
    this.deviceInfos = this.navParams.get("device");
    this.deviceType = this.navParams.get("toggleable");
  }


}
