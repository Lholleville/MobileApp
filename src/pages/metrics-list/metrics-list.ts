import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";

/**
 * Generated class for the MetricsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metrics-list',
  templateUrl: 'metrics-list.html',
})
export class MetricsListPage {

  metrics: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public dataSet: DataEngineProvider) {
    this.dataSet.loadData('https://jsonplaceholder.typicode.com/posts?userId=1').then(data => {
      this.metrics = data;
    }); //Load the data from the Java server relative to the user specified in a variable called userLinkedDevices
  }

}
