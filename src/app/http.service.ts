import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

const url = 'https://www.solution-it.pl/ebok/';

// let myHeaders = new HttpHeaders();
//   myHeaders = myHeaders.set("Access-Key", "<sekret>")


export interface Faktura{
    ID: number;
    Numer_fa: number;
    Data_wystawienia: string;
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

  notifi_subject = new BehaviorSubject<number>(18);
 // public readonly loader_badge = this.notifi_subject.asObservable();

  constructor(private http: HttpClient) {
    
   }
   getNotifications(text: string): Observable<any> {   
     return this.http.get<Notification[]>(url+text);
   }

  getAllFaktury(text: string): Observable<Faktura[]> {   
               
   // return this.http.get<Faktura[]>(url+text, {headers: myHeaders});
    return this.http.get<Faktura[]>(url+text);
  }
  postNewNotifi(NotifiData: FormGroup): Observable<any>{
     return this.http.post(url+'messasge', NotifiData.value);
   }

  postNewUser(userData: FormGroup): Observable<any>{

     return this.http.post(url+'add', userData.value);
   }

}
