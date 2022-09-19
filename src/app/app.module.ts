import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



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
import { RegisterComponent } from './register/register.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';


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
    RegisterComponent,
    SpinnerOverlayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
