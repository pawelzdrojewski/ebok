import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  //load_badge = this.http.loader_badge;
  badge?: number;
<<<<<<< HEAD
  role_admin = this.Auth.role_admin.value;
=======
  role_admin: boolean = false;
>>>>>>> b268930ecec1e8a2acccf782624d65d34ec91721

  navlink: {navi: string, link: string, role: string}[] = [
    {navi: "Faktury", link: "/faktury", role: "user"},
    {navi: "Liczniki", link: "/liczniki", role: "user"},
    {navi: "Odczyt licznika", link: "/odczyty", role: "user"},
    {navi: "Zgłoszenia", link: "/zgloszenie", role: "user"},
    {navi: "Statystyki", link: "/faktury", role: "user"},
    {navi: "Umowy", link: "/faktury", role: "user"},
    {navi: "Pomoc", link: "/faktury", role: "user"},
    {navi: "Komunikaty", link: "/komunikaty", role: "admin"},
  ];
  constructor( public Auth: AuthService,
               private router: Router,
               private http: HttpService) { }

  ngOnInit(): void {
      this.http.notifi_subject.subscribe(
    //this.http.loader_badge.subscribe(   //????? taki i tak działa 
      (badge) => {this.badge = badge}
    );
    console.log(this.navlink[0].link)
  }
  out(){
    this.Auth.logout();
    this.router.navigate(['/']);
  }
}
