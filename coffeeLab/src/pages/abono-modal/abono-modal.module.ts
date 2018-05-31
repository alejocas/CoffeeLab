import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbonoModalPage } from './abono-modal';

@NgModule({
  declarations: [
    AbonoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AbonoModalPage),
  ],
})
export class AbonoModalPageModule {}
