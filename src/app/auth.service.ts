import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: boolean = false;

  constructor() { }

  login(): Observable<boolean>{
    this.session= true;
    return of(true); //w prawdziwej sesji zaimplementował bym return this.http.get
  }
  logout(){
    this.session= false;

  }
}
