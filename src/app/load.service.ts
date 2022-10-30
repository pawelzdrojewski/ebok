import { Injectable } from '@angular/core';                                           
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';           // poczytać
import { take } from 'rxjs/operators';                             // poczytać

@Injectable({
  providedIn: 'root'
})

export class LoadService {



  isLoading = new BehaviorSubject<boolean>(false);
  public readonly _loading = this.isLoading.asObservable();
  

  constructor() { }

  show(){
   // console.log("show()");
    return this.isLoading.next(true); 
   }

   hiden(){
 //   console.log("hiden()");
   return  this.isLoading.next(false);
   }
}
