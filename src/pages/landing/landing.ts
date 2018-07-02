import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from "../home/home";
import {InAppBrowser, InAppBrowserObject, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {Http, Headers} from "@angular/http";
import {Storage} from "@ionic/storage";
import * as decode from 'jwt-decode';
import {TabsMenuePage} from "../tabs-menue/tabs-menue";
import {templateJitUrl} from "@angular/compiler";
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  clientID: string = "216e3df8-b1d1-4a7f-8d25-2d3e58d46b2c";
  clientSecret: string = "7_sPKD2)u0tcB:\\Pc#_)f:X~";
  redirectUri: string = "urn:ietf:wg:oauth:2.0:oob";
  loginUrl: string = "https://partners-login.eliotbylegrand.com/authorize?client_id=" + this.clientID + "&redirect_uri=" + this.redirectUri + "&response_type=code";
  accessToken: string = "";
  refreshToken: string = "";
  decodedAccessToken: string = "";

  constructor(private storage: Storage ,public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser, public http: Http) {
  }

  redirect(){
    const options: InAppBrowserOptions = {
      zoom: "no",
    };
    const browser = this.iab.create(this.loginUrl, "_self", options);
    browser.on("loadstart").subscribe(evt => {
      if (evt.url.startsWith("http://"+this.redirectUri)){
        let code = evt.url.replace("http://"+this.redirectUri+"?code=", "");
        browser.close();

        console.log(code);
        this.getToken(code);
      }
    })
  }

  getToken(code){
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = {
      client_id: this.clientID,
      grant_type: 'authorization_code',
      code: code,
      client_secret: this.clientSecret
    };

    let formData = [];

    for (const property in body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(body[property]);
      formData.push(encodedKey + '=' + encodedValue);
    }


    this.http.post("https://partners-login.eliotbylegrand.com/token", formData.join("&"), {headers: headers}).subscribe(response => {
      let body = response.json();

      this.accessToken = body.access_token;
      this.refreshToken = body.refresh_token;
      this.decodedAccessToken = decode(this.accessToken).sub;
      this.storage.set("user_id", this.decodedAccessToken)
        .then(()=>this.storage.set("access_token", this.accessToken))
        .then(()=>this.storage.set("refresh_token", this.refreshToken))
        .then(()=>this.navCtrl.setRoot(TabsMenuePage));

    });


  }

}
