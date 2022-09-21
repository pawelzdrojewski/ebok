import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { AuthService } from './auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private Auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 

  const  Authorization: any  = localStorage.getItem('Bearer');
   // console.log("getToken "+ rawToken)
     const helper = new JwtHelperService();
 //    const decodedToken = helper.decodeToken(rawToken);
   //   console.log("decodedToken "+ decodedToken);
  //     const expirationDate = helper.getTokenExpirationDate(rawToken);
  //   //  console.log("expirationDate "+ expirationDate);
     const isExpired = helper.isTokenExpired(Authorization);
 if (Authorization){
    if (!isExpired || null){
    }else {
      console.log("Sesja wygasła");
      this.Auth.logout();
      this.router.navigate(['/']);
   }
   return next.handle(request.clone({  setHeaders: {Authorization} }));
  }
 else{
 // request = request.clone({ setHeaders: {API_KEY} })}
   //request = request.clone({ setHeaders: { Authorization: `${rawToken}` } })
   return next.handle(request).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          if(event.status == 401) {
          //  alert('Nieautoryzowany dostęp!!!')
          }
          if(event.status == 403) {
            this.router.navigate(['/']); 
            //alert('Nieautoryzowany dostęp!!!')
          }
        }
        return event;
      },
      error: (error) => {
        if(error.status == 401) {
        //  alert('Nieautoryzowany dostęp!!!')
        }
        if(error.status == 404) {
          alert('Strony nie odnaleziono!!!');
        }
      }
    })
  );
 }

  
  }
}
