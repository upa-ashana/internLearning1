import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginService} from './user-login/login.service';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UshaComponent } from './usha/usha.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    UshaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
