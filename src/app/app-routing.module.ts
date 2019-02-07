import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './user-login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'dashboard', component:DashboardComponent},
  //{path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '', component: AppComponent  }

];
@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  // declarations: []
})
export class AppRoutingModule { 

}
