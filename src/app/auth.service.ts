import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

const url = 'https://solution-it.pl/ebok/'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: boolean = false;

  constructor(private http: HttpClient) { }


  login(userData: FormGroup): Observable<any>{
    console.log("z auth.service userData.value = "+userData.value.email);
    return this.http.post(url+'auth?email='+userData.value.email+'&password='+userData.value.password, userData.value);
    
  }


  logout(){
    this.session= false;
    
    localStorage.clear();
    sessionStorage.clear();

  }

}
