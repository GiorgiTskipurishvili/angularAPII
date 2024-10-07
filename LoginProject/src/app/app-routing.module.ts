import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { RegistrationComponent } from './registration/registration.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'main', component: MainComponent },
//   {path: 'save-employee', component: SaveEmployeeComponent},
//   { path: 'update-employee/:id', component: UpdateEmployeeComponent },
//    { path: 'get-employee/:id', component: GetEmployeeComponent }

// ];
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'save-employee', component: SaveEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'get-employee/:id', component: GetEmployeeComponent },
  {path: 'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
