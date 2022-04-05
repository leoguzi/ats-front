import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, ReactiveFormsModule],
  exports: [CommonModule, PoModule, ReactiveFormsModule],
})
export class SharedModule {}
