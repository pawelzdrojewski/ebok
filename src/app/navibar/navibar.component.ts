import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  role_admin = this.Auth.role_admin.value;

  navlinks: {navi: string, link: string, role: string}[] = [
    {"navi": "Faktury", link: "/faktury", role: "user"},
    {navi: "Liczniki", link: "/liczniki", role: "user"},
    {navi: "Odczyt licznika", link: "/odczyty", role: "user"},
    {navi: "Zgłoszenia", link: "/zgloszenie", role: "user"},
    {navi: "Statystyki", link: "#", role: "user"},
    {navi: "Umowy", link: "#", role: "user"},
    {navi: "Pomoc", link: "#", role: "user"},
    {navi: "Komunikaty", link: "/komunikaty", role: "admin"},
  ];

  filter_navilinks?: {navi: string, link: string, role: string}[];
  
  constructor( public Auth: AuthService,
               private router: Router,
               private http: HttpService) { }

  ngOnInit(): void {
      this.http.notifi_subject.subscribe(
    //this.http.loader_badge.subscribe(   //????? taki i tak działa 
      (badge) => {this.badge = badge}
    ); 
    this.filter_navilinks =  this.navlinks.filter(navilinks => navilinks.role == "admin" || "user");
  }
  out(){
    this.Auth.logout();
    this.router.navigate(['/']);
  }
}
