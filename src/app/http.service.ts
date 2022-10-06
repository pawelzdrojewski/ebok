import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
export interface Notificatio{
  ID: number;
  Data: any;
  Title: string;
  Details: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  notifi_subject = new BehaviorSubject<number>(Math.random() *10);
  public readonly loader_badge = this.notifi_subject.asObservable();

  constructor(private http: HttpClient) {
    
   }
   getNotifications(text: string): Observable<any> {   
     return this.http.get<Notification[]>(url+text);
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
