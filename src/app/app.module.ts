import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavibarComponent } from './navibar/navibar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { OdczytComponent } from './odczyt/odczyt.component';
import { LicznikiComponent } from './liczniki/liczniki.component';
import { FakturyComponent } from './faktury/faktury.component';
import { KlientComponent } from './klient/klient.component';
import { ZgloszeniaComponent } from './zgloszenia/zgloszenia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    FooterComponent,
    LoginComponent,
    OdczytComponent,
    LicznikiComponent,
    FakturyComponent,
    KlientComponent,
    ZgloszeniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
