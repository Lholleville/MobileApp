import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicesDetailsPage } from './devices-details';

@NgModule({
  declarations: [
    DevicesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevicesDetailsPage),
  ],
})
export class DevicesDetailsPageModule {}
