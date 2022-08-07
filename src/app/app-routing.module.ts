import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakturyComponent } from './faktury/faktury.component';
import { KlientComponent } from './klient/klient.component';
import { LicznikiComponent } from './liczniki/liczniki.component';
import { LoginComponent } from './login/login.component';
import { OdczytComponent } from './odczyt/odczyt.component';
import { ZgloszeniaComponent } from './zgloszenia/zgloszenia.component';

const routes: Routes = [
  {path:'faktury', component: FakturyComponent},
  {path:'liczniki', component: LicznikiComponent},
  {path:'odczyt', component: OdczytComponent},
  {path:'login', component: LoginComponent},
  {path:'klient', component: KlientComponent},
  {path: 'zgloszenie', component: ZgloszeniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
