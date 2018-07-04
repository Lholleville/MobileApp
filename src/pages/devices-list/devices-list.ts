import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";
import {DevicesDetailsPage} from "../devices-details/devices-details";

/**
 * Generated class for the DevicesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices-list',
  templateUrl: 'devices-list.html',
})
export class DevicesListPage {

  userLinkedDevices: any;
  devicesCount: any;
  constructor(public navCtrl: NavController, public http: HttpClient, public dataSet: DataEngineProvider) {
    let userID = "users"; //will be automatically replaced by the one sent back by Eliot's API

    this.dataSet.loadData('https://jsonplaceholder.typicode.com/'+userID)
      .then(data => {
      this.userLinkedDevices = data;
      this.devicesCount = data;
      this.devicesCount = this.devicesCount.length; //!!! must change to get the users devices, here it gets the devices types!!!
    }); //Load the data from the Java server relative to the user specified in a variable called userLinkedDevices
  }

  itemSelected(chosenDeviceType){
    this.navCtrl.push(DevicesDetailsPage, {
      chosenDeviceType: chosenDeviceType.id,
      chosenDeviceName: chosenDeviceType.name});
  }
}
