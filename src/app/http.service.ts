import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

const url = 'https://www.solution-it.pl/ebok/';

// let myHeaders = new HttpHeaders();
//   myHeaders = myHeaders.set("Access-Key", "<sekret>")


export interface Faktura{
    ID: number;
    Numer: string;
    Data_wystawienia: any;
    Kwota: number;
    Data_platnosci: string;
    Status: string;
} 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    
   }

   

  getAllFaktury(text: string): Observable<any> {   
               
   // return this.http.get<Faktura[]>(url+text, {headers: myHeaders});
    return this.http.get<Faktura[]>(url+text);
  }

  postNewUser(userData: FormGroup): Observable<any>{
    // console.log(userData.value);
    console.log(userData.value);
     return this.http.post(url+'add', userData.value);
   }

}
