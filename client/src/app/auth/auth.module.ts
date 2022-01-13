import {NgModule} from '@angular/core';
import {LoginComponent} from './containers/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import {SignupComponent} from './containers/signup/signup.component';
import {AuthService} from '../helpers/services';
import {ResetPasswordComponent} from './containers/reset-password/reset-password.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CoreModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
