import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ControlOfAccessComponent } from './control-of-access.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ControlOfAccessComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlOfAccessRoutingModule {}
