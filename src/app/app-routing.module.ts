import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FakturyComponent } from './faktury/faktury.component';
import { KlientComponent } from './klient/klient.component';
import { LicznikiComponent } from './liczniki/liczniki.component';
import { LoginComponent } from './login/login.component';
import { ZgloszeniaComponent } from './zgloszenia/zgloszenia.component';
import { NavibarAdminComponent } from './navibar-admin/navibar-admin.component';
import { OdczytyComponent } from './odczyty/odczyty.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { PowiadomieniaComponent } from './powiadomienia/powiadomienia.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'faktury', component: FakturyComponent},
  {path: 'liczniki', component: LicznikiComponent},
  {path: 'odczyty', component: OdczytyComponent},
  {path: 'klient', component: KlientComponent},
  {path: 'zgloszenie', component: ZgloszeniaComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'navibar-admin', component: NavibarAdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'spiner', component: SpinnerOverlayComponent},
  {path: 'powiadomienia', component: PowiadomieniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
