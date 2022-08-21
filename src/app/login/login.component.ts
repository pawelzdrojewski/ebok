import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: FormGroup;
  token: any;

  constructor(private Auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {

      this.userData = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      });
            
  }

  ngOnInit(): void {

    
  }

  in(){
    if (this.userData.value.email && this.userData.value.password) {
      localStorage.setItem('token','xhja787');


      this.Auth.login(this.userData).subscribe(
        (response) => {
           this.userData = response;
           if (this.Auth.session){
            // console.log('email '+ this.userData.value.email + ', password ' + this.userData.value.password);
            // console.log(localStorage.getItem('token'));
             }
           },
        (error) => { console.log(error); }
      )
      this.router.navigate(['/faktury']);
    }
  }

}
