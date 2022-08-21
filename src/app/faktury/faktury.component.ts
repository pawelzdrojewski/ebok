import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-faktury',
  templateUrl: './faktury.component.html',
  styleUrls: ['./faktury.component.scss']
})
export class FakturyComponent implements OnInit {

  dataSource: any;

  podglad: boolean = false;
  required: string = 'allfv';

  constructor(private httpService: HttpService){} //private Http: HttpService) { }

  ngOnInit(): void {

    this.FakturyGet(this.required); 
  }

  FakturyGet(text: string){  
    this.httpService.getAllFaktury(text).subscribe(
      (response) => { this.dataSource = response; },
      (error) => { console.log(error); }
      );
     // return this.dataSource;
  }


  show(){
    this.podglad = true;
    
    console.log(this.podglad);
  }

}
