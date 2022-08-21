import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const url = 'https://solution-it.pl/ebok/'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: boolean = false;

  constructor(private http: HttpClient) { }


  login(userData: FormGroup): Observable<any>{

   // console.log('From AuthServive: email '+ login + ', password ' + pass);
    this.session= true;
    return this.http.post(url+'auth',userData.value, {responseType: 'text'} );
    //return of(true); //w prawdziwej sesji zaimplementował bym return this.http.get
  }
  logout(){


    this.session= false;

  }

}
