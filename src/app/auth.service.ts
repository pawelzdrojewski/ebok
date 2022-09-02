import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

import { JwtHelperService } from "@auth0/angular-jwt";

const url = 'https://solution-it.pl/ebok/'; 

export interface Users{
  ID: number;
  login: string;
  Imie: string;
  Nazwisko: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  session: boolean = false;
  authResult: any;

  constructor(private http: HttpClient) { }

  login(userData: FormGroup): Observable<any>{
    return this.http.post<Users[]>(url+'auth?email='+userData.value.login+'&password='+userData.value.password, userData.value);
  }


  setSession(authResult: any) {
    this.authResult = authResult;
   // this.authResult.ge]
    //const expiresAt = moment().clone().add(this.authResult.expiresIn);
   // console.log("this.authResult.expiresIn: "+this.authResult.expiresIn);
   // localStorage.setItem('Token', this.authResult);
   // sessionStorage.setItem('Token', this.authResult);
    //localStorage.setItem('id_token', this.authResult.Token);?????
    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

   // this.verfiSession( localStorage.getItem('Token'));
  }

  verfiSession(rawToken: any){
    
       // const rawToken = JSON.parse(localStorage.getItem('Token') || '{}'); //tesowanie czy token nie jest pusty

    //console.log("getToken "+ rawToken)
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(rawToken);
     //console.log("decodedToken "+ decodedToken);
     const expirationDate = helper.getTokenExpirationDate(rawToken);
     //console.log("expirationDate "+ expirationDate);
    const isExpired = helper.isTokenExpired(rawToken);
    //console.log("isExpired "+ isExpired);
   

  }

  logout(){
    this.session= false;  
    localStorage.removeItem('Token');
    sessionStorage.removeItem('Token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    //localStorage.clear();
    //sessionStorage.clear();
  }
}