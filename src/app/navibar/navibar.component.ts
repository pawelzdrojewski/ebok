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
  role_admin: boolean = true;

  constructor( public Auth: AuthService,
               private router: Router,
               private http: HttpService) { }

  ngOnInit(): void {
      this.http.notifi_subject.subscribe(
    //this.http.loader_badge.subscribe(   //????? taki i tak działa 
      (badge) => {this.badge = badge}
    );

  }
  out(){
    this.Auth.logout();
    this.router.navigate(['/']);
  }
}
