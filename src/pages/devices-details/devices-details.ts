import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";
import {HttpClient} from "@angular/common/http";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";
import {DevicesListPage} from "../devices-list/devices-list";

/**
 * Generated class for the DevicesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices-details',
  templateUrl: 'devices-details.html',
})
export class DevicesDetailsPage {

  chosenDeviceType: any;
  chosenDeviceName: any;
  devices: any;
  private toggleable: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public dataSet: DataEngineProvider) {
    this.chosenDeviceType = navParams.get('chosenDeviceType');
    this.chosenDeviceName = navParams.get('chosenDeviceName');
    this.dataSet.loadData('https://jsonplaceholder.typicode.com/posts?userId='+this.chosenDeviceType).then(data => {
      this.devices = data;
    }); //Load the data from the Java server relative to the user specified in a variable called userLinkedDevices
  }

  itemSelected(device){
    if (this.chosenDeviceType == 9 || this.chosenDeviceType == 10){
      this.toggleable = true;
    } else {
      this.toggleable = false;
    }
    this.navCtrl.push(DetailPage, {device: device, toggleable: this.toggleable});
  }
}
