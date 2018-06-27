import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetricsListPage } from './metrics-list';

@NgModule({
  declarations: [
    MetricsListPage,
  ],
  imports: [
    IonicPageModule.forChild(MetricsListPage),
  ],
})
export class MetricsListPageModule {}
