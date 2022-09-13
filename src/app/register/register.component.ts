import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myFormModel: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myFormModel = fb.group({
      registerName: ['', Validators.required],
      registerUsername: ['', Validators.required],
      registerEmail: ['', Validators.email],
      passwordsGroup: fb.group({
        registerPassword: ['',Validators.required, Validators.minLength(2)], //minLenhgt() wywołuje błąd w przegladarece ?????
        registerRepeatPassword: ['',Validators.required]
        })
    });
  //  J // this.myFormModel = new FormGroup({
  //  E //   registerName: new FormControl('', [Validators.required]),
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
    console.log(this.myFormModel.value);
    }

}
