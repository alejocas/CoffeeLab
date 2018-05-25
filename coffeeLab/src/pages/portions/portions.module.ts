import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortionsPage } from './portions';

@NgModule({
  declarations: [
    PortionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PortionsPage),
  ],
})
export class PortionsPageModule {}
