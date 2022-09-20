import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';                                           // poczytać
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';           // poczytać

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private _loading = new BehaviorSubject<boolean>(false); //???
  

  constructor() { }
}
