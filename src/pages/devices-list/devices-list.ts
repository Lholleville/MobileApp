import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {DetailPage} from "../detail/detail";
import { DevicesDetailsPage } from "../devices-details/devices-details";""

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

  items: any[];

  constructor(public navCtrl: NavController, public http: Http) {

    this.items = [];
    for(let i = 0; i<10; i++){
      this.items.push({
        text: 'Item' + i,
        id: i
      });
    }
  }

  itemSelected(item){
    this.navCtrl.push(DevicesDetailsPage, {item: item});
  }

}
