import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: boolean = false;

  constructor( private Http: HttpClientModule) { }

  login(email: any, pass: any): Observable<boolean>{

    console.log('From AuthServive: email '+ email + ', password ' + pass);
    this.session= true;
    return of(true); //w prawdziwej sesji zaimplementował bym return this.http.get
  }
  logout(){
    this.session= false;

  }
}
