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
import { NotifiEditorComponent } from './notifi-editor/notifi-editor.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'faktury', component: FakturyComponent, canActivate: [AuthGuard]},
  {path: 'liczniki', component: LicznikiComponent, canActivate: [AuthGuard]},
  {path: 'odczyty', component: OdczytyComponent, canActivate: [AuthGuard]},
  {path: 'klient', component: KlientComponent, canActivate: [AuthGuard]},
  {path: 'zgloszenie', component: ZgloszeniaComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'navibar-admin', component: NavibarAdminComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'spiner', component: SpinnerOverlayComponent, canActivate: [AuthGuard]},
  {path: 'powiadomienia', component: PowiadomieniaComponent, canActivate: [AuthGuard]},
  {path: 'komunikaty', component: NotifiEditorComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
