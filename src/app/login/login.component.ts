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
  //token: any;
  info = true;
 // authResult: any;
  

  constructor(private Auth: AuthService,
              private router: Router,
              private fb: FormBuilder,
             ) {

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
    console.log(this.Auth.isLogged.value);
    if (this.userData.value.login && this.userData.value.password) {
      this.Auth.login(this.userData).subscribe(
        (response) => {
          this.Auth.isLogged.next(true);
          if (response) {
            this.Auth.setSession(response);
            if(this.Auth.role_admin.value)
              this.router.navigate(['/komunikaty']);
            else
              this.router.navigate(['/faktury']);
          }
          else{
            this.info = true;
            this.router.navigate(['/']); 
          }
        },
        (error) => console.log(error),      
      )
    }
  }  
}