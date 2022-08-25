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
    return this.http.post(url+'auth?email=pawez&password=start', userData.value);
  }


  logout(){
    this.session= false;
  }

}
