import { NewPositionComponent } from './new-position/new-position.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'positions' },
      { path: 'positions', component: OpenPositionsComponent },
      { path: 'newposition', component: NewPositionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
