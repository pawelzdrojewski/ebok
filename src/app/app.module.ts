import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavibarComponent } from './navibar/navibar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LicznikiComponent } from './liczniki/liczniki.component';
import { FakturyComponent } from './faktury/faktury.component';
import { KlientComponent } from './klient/klient.component';
import { ZgloszeniaComponent } from './zgloszenia/zgloszenia.component';
import { NavibarAdminComponent } from './navibar-admin/navibar-admin.component';
import { AdminComponent } from './admin/admin.component';
import { OdczytyComponent } from './odczyty/odczyty.component';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    FooterComponent,
    LoginComponent,
    LicznikiComponent,
    FakturyComponent,
    KlientComponent,
    ZgloszeniaComponent,
    NavibarAdminComponent,
    AdminComponent,
    OdczytyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
