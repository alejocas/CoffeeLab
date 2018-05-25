import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandsPage } from './lands';

@NgModule({
  declarations: [
    LandsPage,
  ],
  imports: [
    IonicPageModule.forChild(LandsPage),
  ],
})
export class LandsPageModule {}
