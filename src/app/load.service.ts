import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';                                           
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';           // poczytać
import { take } from 'rxjs/operators';                              // poczytać

@Injectable({
  providedIn: 'root'
})

export class LoadService {
 // private _loading = new BehaviorSubject<boolean>(false); //???

  isLoading = new Subject<boolean>();

  constructor() { }

  show(){
    console.log("show()");
   // prompt("Trwa ładowannie danych ...");
    return this.isLoading.next(true); 
   }

   hiden(){
    console.log("hiden()");
   return  this.isLoading.next(false);
   }
}
