import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './user-login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'reactive-form', component:ReactiveFormComponent},
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
