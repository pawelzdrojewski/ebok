import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

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

  constructor(private http: HttpClient) { }

  login(userData: FormGroup): Observable<any>{
    console.log("z auth.service userData.value = "+userData.value.login);
    return this.http.post<Users[]>(url+'auth?email='+userData.value.login+'&password='+userData.value.password, userData.value);
  }

  logout(){
    this.session= false;  
    localStorage.removeItem('Token');
    sessionStorage.removeItem('Token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    localStorage.clear();
    sessionStorage.clear();
  }
}