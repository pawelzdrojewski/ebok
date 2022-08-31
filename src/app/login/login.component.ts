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

  constructor(private Auth: AuthService,
              private router: Router,
             private fb: FormBuilder) {

      // this.userData = new FormGroup({
      //   login: new FormControl(['',Validators.required]),
      //   password: new FormControl(['',Validators.required]),
      // });

     this.userData = this.fb.group({
       login: ['',Validators.required],
       password: ['',Validators.required]
     });
            
  }

  ngOnInit(): void {

    
  }

  login(){
    if (this.userData.value.login && this.userData.value.password) {
      this.Auth.login(this.userData).subscribe(
        (response) => { 
          if (response =='Nieprawidłowy login lub hasło.') {
            this.info=true;
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/']);    
          }
          else{
            console.log('Token: '+response);
           // localStorage.setItem('Token', response);
            sessionStorage.setItem('Token', response);
            this.router.navigate(['/faktury']);
          }
        },
        (error) => console.log(error),
      
      )
      
    }
  }

}

