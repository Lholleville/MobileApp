import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";

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

  item: any;
  devices: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.devices = [];
    for(let i = 0; i<10; i++){
      this.devices.push({
        text: 'device ' + i,
        id: i
      });
    }
  }

  itemSelected(device){
    this.navCtrl.push(DetailPage, {device: device});
  }
}
