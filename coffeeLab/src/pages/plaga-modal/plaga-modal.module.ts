import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlagaModalPage } from './plaga-modal';

@NgModule({
  declarations: [
    PlagaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PlagaModalPage),
  ],
})
export class PlagaModalPageModule {}
