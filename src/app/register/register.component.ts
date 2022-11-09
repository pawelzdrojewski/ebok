import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



export class RegisterComponent implements OnInit {

  myFormModel: FormGroup;
  private RECAPTCHA_V2_SITE_KEY = '6LdzscYiAAAAAM0NsyI4UfGc78P-0VYbNVK1lqKg';
  

  constructor(private http: HttpService,  fb: FormBuilder, private router: Router ) { 
    this.myFormModel = fb.group({
      FirstName:        ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur' }],
      userSurname:      ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur' }],
      registerUsername: ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur' }],
      registerEmail:    ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }], //'change' or 'blur' or 'submit'
      recaptcha:        ['', { validators: [Validators.required], updateOn: 'blur' }],
      passwordsGroup: fb.group({
        registerPassword: ['',Validators.required], // , Validators.minLength(2) minLenhgt() wywołuje błąd w przegladarece ?????
        registerRepeatPassword: ['',Validators.required]
        })
    });
  //  J // this.myFormModel = new FormGroup({
  //  E //   FirstNameLastName: new FormControl('', [Validators.required]),
  //  S //   registerUsername: new FormControl('', [Validators.required]),
  //  T //   registerEmail: new FormControl('', [Validators.email]),
  //  _//   passwordsGroup: new FormGroup({
  //  O //     registerPassword: new FormControl('',[Validators.required, Validators.minLength(2)]),
  //  K //     registerRepeatPassword: new FormControl('',[Validators.required, Validators.minLength(2)])
  //  * //     })
  //  * // });
  }


  ngOnInit(): void {
  }


  onSubmit() {
   // console.log(this.myFormModel.value);

    this.http.postNewUser(this.myFormModel).subscribe(
      (response) => { this.myFormModel = response; },
      (error) => { console.log(error); }
    );
    confirm("Rejestracja przebiegła pomyślnie. Powót do strony logowania");
    this.router.navigate(['/']);

    }

    // passwordConfirmValidator(control: FormControl): any {
    //   let p = control.root.get('Password');
    //   let pc = control.root.get('PasswordConfirm');
    //   if (p && pc) {
    //   if (p.value !== pc.value) {
    //   pc.setErrors(
    //   { "PasswordMismatch": true }
    //   );
    //   }
    //   else {
    //   pc.setErrors(null);
    //   }
    //   }
    //   return null;
    //   }

}
