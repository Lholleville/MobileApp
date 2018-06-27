import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsMenuePage } from './tabs-menue';

@NgModule({
  declarations: [
    TabsMenuePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsMenuePage),
  ],
})
export class TabsMenuePageModule {}
