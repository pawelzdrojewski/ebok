import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  userData: any;
  //token: any;
  info = false;
 // authResult: any;
  

  constructor(private Auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {

     this.userData = this.fb.group({
       login: ['',Validators.required],
       password: ['',Validators.required]
     });
            
  }

  ngOnInit(): void {}

  login(){
    localStorage.removeItem("Bearer");
    localStorage.removeItem("expires_at");
    sessionStorage.removeItem("Barer");
    if (this.userData.value.login && this.userData.value.password) {
      this.Auth.login(this.userData).subscribe(
        (response) => { 
          if (response) {
            this.Auth.setSession(response);
            this.router.navigate(['/faktury']);
          }
          else{
            this.info=true;
            this.router.navigate(['/']); 
          }
        },
        (error) => console.log(error),      
      )
    }
  }
}

