import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  userData: any;
  token: any;
  info = false;
  authResult: any;

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
    if (this.userData.value.login && this.userData.value.password) {
      this.Auth.login(this.userData).subscribe(
        (response) => { 
          if (response =='Nieprawidłowy login lub hasło.') {
            this.info=true;
            this.router.navigate(['/']);    
          }
          else{
            this.Auth.setSession(response);
            this.router.navigate(['/faktury']);
          }
        },
        (error) => console.log(error),
      
      )
      
    }
  }
}

