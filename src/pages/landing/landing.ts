///<reference path="../firstlogin/firstlogin.ts"/>
import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { HomePage} from "../home/home";
import {InAppBrowser, InAppBrowserObject, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {Http, Headers} from "@angular/http";
import {Storage} from "@ionic/storage";
import * as decode from 'jwt-decode';
import {TabsMenuePage} from "../tabs-menue/tabs-menue";
import {templateJitUrl} from "@angular/compiler";
import {DataEngineProvider} from "../../providers/data-engine/data-engine";
import {FirstloginPage} from "../firstlogin/firstlogin";


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
  userInfos: any;
  eliotUserID: any;
  userMail: any;
  userPass: any;

  constructor(private dataSet: DataEngineProvider ,public loadingCtrl: LoadingController ,private storage: Storage ,public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser, public http: Http) {
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();

    setTimeout(()=>{
      loading.dismiss();
    }, 5000);
  }

  redirect(){
    const options: InAppBrowserOptions = {
      zoom: "no",
      clearsessioncache: "yes",
    };
    const browser = this.iab.create(this.loginUrl, "_self", options);
    browser.on("loadstart").subscribe(evt => {
      if (evt.url.startsWith("http://"+this.redirectUri)){
        let code = evt.url.replace("http://"+this.redirectUri+"?code=", "");
        browser.close();
        this.getToken(code);
      }
    })
  }

  getToken(code){
    this.userMail = this.navParams.get("userMail");
    this.userPass = this.navParams.get("userPass");


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
      this.eliotUserID = this.decodedAccessToken;
      this.storage.set("user_id", this.decodedAccessToken)
        .then(()=>this.storage.set("access_token", this.accessToken))
        .then(()=>this.storage.set("refresh_token", this.refreshToken))
        .then(()=> console.log(this.userMail, this.userPass, this.eliotUserID))
        .then(()=> this.presentLoadingDefault())
        .then(()=>this.navCtrl.setRoot(TabsMenuePage));
    });
  }


  test(){
    this.dataSet.loadData('http://10.176.129.83:54815/JavaplatformLinux/webresources/entities.user').then(data => {
      this.userInfos = data;
      console.log(this.userInfos);
    });
  }

  createAccount(){
    // const options: InAppBrowserOptions = {
    //   zoom: "no",
    //   clearsessioncache: "yes",
    // };
    // const browser = this.iab.create("https://login.microsoftonline.com/eliotclouduamprd.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_eliot-signup&client_id=c3b23ef7-aa7d-4d3a-8253-efbb296457cd&redirect_uri=https%3a%2f%2fdeveloper.legrand.com%2fsignin-aad&response_mode=form_post&response_type=id_token&scope=openid&state=OpenIdConnect.AuthenticationProperties%3dB8UTSKkyYqNqGZWco8yetQyfqAfyALEu_RUQkF02yE3qv4jhorXdmwmNL2VZDDe07rVm1_13ZjoZUT3q-5I1a3s7yVn5eyoLyIs_8dUNmrN1bNoeWs2eM4dX6qh5R2eP_zUqLAuWOl0Z03HR9IBoDzlYViyEDb7CsVn9MYJCYuEjn0syXqSBeLed22oHkK6dUau7wwUHZGeD2woRPwbxrxvf0DUiKR2lRDSv6EA96k_VlMtDODS-pivd-DmpRYn7rRflKlXbI_UsZY3L71prf2rIBOVhyeayuvz6H-ueduw&nonce=636662168868342549.OWYyYWIxNDItNzEyOS00YTcwLTkxY2EtMGI3NGVkY2ZlOTM2ZTFlZjYwMzAtODUwOC00ZDZmLWIxNGItMzU1ZmJlZDk1ODZl", "_self", options);
    // browser.on('exit').subscribe(evt => {
    //   this.navCtrl.push(FirstloginPage);
    // })
    this.navCtrl.push(FirstloginPage, {eliotUserID: this.eliotUserID});
  }
}
