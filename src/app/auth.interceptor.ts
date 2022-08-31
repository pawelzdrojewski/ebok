import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { AuthService } from './auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private Auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

 // if (this.Auth.verfiSession(localStorage.getItem('Token'))) 

  const  rawToken: any  = localStorage.getItem('Token');
    console.log("getToken "+ rawToken)
     const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(rawToken);
    //  console.log("decodedToken "+ decodedToken);
    //  const expirationDate = helper.getTokenExpirationDate(rawToken);
    //  console.log("expirationDate "+ expirationDate);
    const isExpired = helper.isTokenExpired(rawToken);

    if (!isExpired){

    }else {
      console.log("Sesja wygasła");
      this.router.navigate(['/']);
   }
   // console.log("isExpired "+ isExpired);




    const API_KEY = '123456';
    return next.handle(request.clone({ setHeaders: { API_KEY } }));
  }
}
