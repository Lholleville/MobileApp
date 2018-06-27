import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DevicesListPage} from "../devices-list/devices-list";
import {MetricsListPage} from "../metrics-list/metrics-list";
import {HomePage} from "../home/home";

/**
 * Generated class for the TabsMenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-menue',
  templateUrl: 'tabs-menue.html',
  template:'<ion-tabs>\n' +
  '      <ion-tab tabTitle="Home" [root]="tab1"></ion-tab>\n' +
  '      <ion-tab tabTitle="Devices" [root]="tab2"></ion-tab>\n' +
  '      <ion-tab tabTitle="Metrics" [root]="tab3"></ion-tab>\n' +
  '    </ion-tabs>`'
})
export class TabsMenuePage {
  tab1: any;
  tab2: any;
  tab3: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = DevicesListPage;
    this.tab3 = MetricsListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMenuePage');
  }

}
