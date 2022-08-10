import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  in(){
    console.log(this.Auth.login());
    if (this.Auth.session) 
    this.router.navigate(['/faktury']);
  }

}
