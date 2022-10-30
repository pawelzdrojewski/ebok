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
import { LoaderInterceptor } from './loader.interceptor';
import { PowiadomieniaComponent } from './powiadomienia/powiadomienia.component';
import { NotifiEditorComponent } from './notifi-editor/notifi-editor.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './users/users.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';


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
    PowiadomieniaComponent,
    NotifiEditorComponent,
    UsersComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
              { provide: RECAPTCHA_SETTINGS, useValue: {
                  siteKey: environment.recaptcha.siteKey,
                  } as RecaptchaSettings,
              },
              AuthGuard,

            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
