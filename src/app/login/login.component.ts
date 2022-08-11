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

  form: FormGroup;
  token: any;

  constructor(private Auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {

      this.form = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      });
            
  }

  ngOnInit(): void {
  }

  in(){
    if (this.form.value.email && this.form.value.password) {
      localStorage.setItem('token','xhja787');

     // console.log(this.Auth.login(this.form.value.email, this.form.value.password));

      this.Auth.login(this.form.value.email, this.form.value.password).subscribe(() =>{
          if (this.Auth.session){
            console.log('email '+ this.form.value.email + ', password ' + this.form.value.password);
            console.log(localStorage.getItem('token'));
            this.router.navigate(['/faktury']);
          }
        }
      )
    }
  }

}
