import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/operators/map";
import {Observable} from "rxjs/Observable";
import {DetailPage} from "../../pages/detail/detail";

/*
  Generated class for the DataEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataEngineProvider {

  constructor(public http: HttpClient) {

  }

  loadData(url){
    return new Promise((resolve => {
      this.http.get(url).subscribe(response =>{
        resolve(response);
      })
    }))
  }

  getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1))+min;
  }
}
