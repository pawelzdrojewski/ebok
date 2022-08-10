import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faktury',
  templateUrl: './faktury.component.html',
  styleUrls: ['./faktury.component.scss']
})
export class FakturyComponent implements OnInit {

  podglad: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.podglad = true;
    console.log(this.podglad);
  }

}
