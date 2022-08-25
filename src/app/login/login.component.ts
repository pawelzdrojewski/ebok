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

  constructor(private Auth: AuthService,
              private router: Router,
             private fb: FormBuilder) {

      // this.userData = new FormGroup({
      //   email: new FormControl(['',Validators.required]),
      //   password: new FormControl(['',Validators.required]),
      // });

     this.userData = this.fb.group({
       email: ['',Validators.required],
       password: ['',Validators.required]
     });
            
  }

  ngOnInit(): void {

    
  }

  in(){
    if (this.userData.value.email && this.userData.value.password) {
     // localStorage.setItem('token','xhja787');
      this.Auth.login(this.userData).subscribe(
        (response) => { 
          console.log('Token: '+response);
          localStorage.setItem('token',response);
          //this.userData = response  

        },
        (error) => console.log(error),
      
      )
      this.router.navigate(['/faktury']);
    }
  }

}