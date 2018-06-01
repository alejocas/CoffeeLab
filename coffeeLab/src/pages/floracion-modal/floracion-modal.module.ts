import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloracionModalPage } from './floracion-modal';

@NgModule({
  declarations: [
    FloracionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FloracionModalPage),
  ],
})
export class FloracionModalPageModule {}
