import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';
import { TokenInterceptor } from '../token.interceptor';


@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
 //   MatButtonModule,
 //   MatFormFieldModule,
 //   MatInputModule
  ]
})
export class AuthModule { }