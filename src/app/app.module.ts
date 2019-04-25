import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {DataTableModule} from "angular-6-datatable";
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// component
import { AppComponent } from './app.component';
import { LoginComponent } from './user-login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EsewaComponent } from './esewa/esewa.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { DataTableComponent } from './data-table/data-table.component';
// service
import {LoginService} from './user-login/login.service';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    ReactiveFormComponent,
    EsewaComponent,
    FormbuilderComponent,
    AngularTableComponent,
    DataTableComponent,
    PaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DataTableModule,// angular-6-datatable
     
    // FontAwesomeModule  
    

  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  exports:[
    DataTableModule
  ]
})
export class AppModule { }
