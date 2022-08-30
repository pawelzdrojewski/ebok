import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_KEY2 = '123456';
    const API_KEY = localStorage.getItem("Token");


    if (API_KEY) {
      const cloned = request.clone({headers: request.headers.set("Authorization", "Bearer " + API_KEY)});
      console.log('API_KEY: '+ API_KEY );
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
