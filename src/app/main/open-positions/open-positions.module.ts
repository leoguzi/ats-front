import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenPositionsRoutingModule } from './open-positions-routing.module';
import { OpenPositionsComponent } from './open-positions.component';

@NgModule({
  declarations: [OpenPositionsComponent],
  imports: [SharedModule, CommonModule, OpenPositionsRoutingModule],
})
export class OpenPositionsModule {}
