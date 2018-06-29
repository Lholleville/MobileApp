import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {DetailPage} from "../detail/detail";
import {HttpClient} from "@angular/common/http";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  devicesCount: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public dataSet: DataEngineProvider) {

    this.dataSet.loadData('https://jsonplaceholder.typicode.com/posts').then(data => {
      this.devicesCount = data;
      // console.log(this.devicesCount.length);
      this.devicesCount = this.devicesCount.length;
    });

    // for(let i = 0; i<this.devicesCount.toString().length; i++){
    //   this.devicesCount.push({
    //     count: i
    //   });
    // }

  }
}
