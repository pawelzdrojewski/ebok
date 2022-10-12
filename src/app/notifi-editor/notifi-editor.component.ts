import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notifi-editor',
  templateUrl: './notifi-editor.component.html',
  styleUrls: ['./notifi-editor.component.scss']
})

export class NotifiEditorComponent implements OnInit {

  myFormModel: FormGroup;

  constructor(private http: HttpService,  fb: FormBuilder) { 
    this.myFormModel = fb.group({
      title: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("title "+this.myFormModel.value.title);
    console.log("details "+this.myFormModel.value.details);

     this.http.postNewNotifi(this.myFormModel).subscribe(
      (response) => { this.myFormModel = response;},
      (error) => { console.log(error); }
    );

    }
  }


