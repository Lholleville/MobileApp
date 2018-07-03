import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementRef, ViewChild} from "@angular/core";
import {DetailPage} from "../detail/detail";
import {LandingPage} from "../landing/landing";

/**
 * Generated class for the FirstloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstlogin',
  templateUrl: 'firstlogin.html',
})
export class FirstloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('mail') mail: ElementRef;
  @ViewChild('pass') pass: ElementRef;

  leavePage(){
    let mail: any = this.mail;
    let pass: any = this.pass;

    this.navCtrl.push(LandingPage, {userMail: mail.value, userPass: pass.value});
  }

}
