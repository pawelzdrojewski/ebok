import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  constructor( public Auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  out(){

    this.Auth.logout();
    console.log("false");
    this.router.navigate(['/']);
  }
}
