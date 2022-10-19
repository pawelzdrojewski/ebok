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
  

  constructor(private Auth: AuthService, private router: Router, private fb: FormBuilder) {
     this.userData = this.fb.group({
        login: ['',Validators.required],
        password: ['',Validators.required]
     });
            
  }

  ngOnInit(): void {
    localStorage.removeItem("Bearer");
    localStorage.removeItem("expires_at");
    sessionStorage.removeItem("Barer");
  }

  login(){
    if (this.userData.value.login && this.userData.value.password) { // sprawdzenie czy są wypełnione dwa pola należy zmienić na funkcję validatora
      this.Auth.login(this.userData).subscribe(
        (response) => {
          if (response) {
            this.Auth.isLogged.next(true);
            this.Auth.setSession(response);
            this.router.navigate(['/faktury']);
          }
          else{
            this.info = this.Auth.isLogged.value;
          }
        },
        (error) => console.log(error),      
      )
    }
  }  
}