import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakturyComponent } from './faktury/faktury.component';
import { LicznikiComponent } from './liczniki/liczniki.component';
import { LoginComponent } from './login/login.component';
import { OdczytComponent } from './odczyt/odczyt.component';

const routes: Routes = [
  {path:'faktury', component: FakturyComponent},
  {path:'liczniki', component: LicznikiComponent},
  {path:'odczyt', component: OdczytComponent},
  {path:'login', component: LoginComponent},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
