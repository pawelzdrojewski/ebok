import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'https://www.solution-it.pl/ebok/';


interface Faktura{
  ID: number;
  Numer: string;
  Data_wystawienia : any;
  Kwota: number;
  Data_platnosci: string;
  Status: string;
} 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getAllFaktury(text: string): Observable<any> {                
    return this.http.get<any>(url+text);
  }
}
