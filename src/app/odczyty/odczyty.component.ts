import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-odczyty',
  templateUrl: './odczyty.component.html',
  styleUrls: ['./odczyty.component.scss']
})
export class OdczytyComponent implements OnInit {

  

  constructor(private Auth: AuthService) { 

  }

  ngOnInit(): void {

  }



}
