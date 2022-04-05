import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { ControlOfAccessRoutingModule } from './control-of-access-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ControlOfAccessComponent } from './control-of-access.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ControlOfAccessComponent,
  ],
  imports: [SharedModule, ControlOfAccessRoutingModule, FormsModule],
  exports: [ControlOfAccessComponent],
})
export class ControlOfAccessModule {}
