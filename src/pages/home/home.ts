import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DetailPage} from "../detail/detail";
import {DevicesListPage} from "../devices-list/devices-list";
import {MetricsListPage} from "../metrics-list/metrics-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  template:'<ion-tabs>\n' +
  '      <ion-tab tabTitle="Home" [root]="tab1"></ion-tab>\n' +
  '      <ion-tab tabTitle="Devices" [root]="tab2"></ion-tab>\n' +
  '      <ion-tab tabTitle="Metrics" [root]="tab3"></ion-tab>\n' +
  '    </ion-tabs>`'
})
export class HomePage {
  items: any[];
  tab1: any;
  tab2: any;
  tab3: any;


  constructor(public navCtrl: NavController, public http: Http) {
      this.tab1 = DetailPage;
      this.tab2 = DevicesListPage;
      this.tab3 = MetricsListPage;

    //code ici sera call dans le home

    // this.items = [];
    // for(let i = 0; i<10; i++){
    //   this.items.push({
    //     text: 'Item' + i,
    //     id: i
    //   });
    // }
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage, {
      item: item
    })
  }

}
