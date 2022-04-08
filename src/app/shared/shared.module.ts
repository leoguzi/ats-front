import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, PoTemplatesModule, ReactiveFormsModule],
  exports: [CommonModule, PoModule, PoTemplatesModule, ReactiveFormsModule],
})
export class SharedModule {}
