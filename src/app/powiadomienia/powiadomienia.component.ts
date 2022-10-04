import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powiadomienia',
  templateUrl: './powiadomienia.component.html',
  styleUrls: ['./powiadomienia.component.scss']
})
export class PowiadomieniaComponent implements OnInit {

  rows = new Array(100);

  constructor() {}

  ngOnInit(): void {
  }

}
