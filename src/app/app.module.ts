import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from "../pages/detail/detail";
import {LandingPage} from "../pages/landing/landing";
import {DevicesDetailsPage} from "../pages/devices-details/devices-details";
import {DevicesListPage} from "../pages/devices-list/devices-list";
import {MetricsListPage} from "../pages/metrics-list/metrics-list";
import {TabsMenuePage} from "../pages/tabs-menue/tabs-menue";
import {HttpClientModule} from "@angular/common/http";
import { DataEngineProvider } from '../providers/data-engine/data-engine';
import "rxjs"

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    HomePage,
    DetailPage,
    DevicesDetailsPage,
    DevicesListPage,
    MetricsListPage,
    TabsMenuePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    HomePage,
    DetailPage,
    DevicesDetailsPage,
    DevicesListPage,
    MetricsListPage,
    TabsMenuePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataEngineProvider,

  ]
})
export class AppModule {

}
