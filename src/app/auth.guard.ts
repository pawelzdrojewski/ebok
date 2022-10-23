import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Auth: AuthService,
              private router: Router,
              ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Trasa zawsze aktywna");  
    console.log(this.Auth.isLogged.value);

    if (!this.Auth.isLogged.value) {
       this.router.navigate(['/']); 

    }
    return true;
  }
  
}
