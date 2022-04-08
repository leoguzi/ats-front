import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NewPositionComponent } from './new-position/new-position.component';
import { NewPositionFormComponent } from './new-position/new-position-form/new-position-form.component';

@NgModule({
  declarations: [MainComponent, OpenPositionsComponent, NewPositionComponent, NewPositionFormComponent],
  imports: [SharedModule, CommonModule, MainRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
