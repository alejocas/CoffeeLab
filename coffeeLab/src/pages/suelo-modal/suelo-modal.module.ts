import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SueloModalPage } from './suelo-modal';

@NgModule({
  declarations: [
    SueloModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SueloModalPage),
  ],
})
export class SueloModalPageModule {}
