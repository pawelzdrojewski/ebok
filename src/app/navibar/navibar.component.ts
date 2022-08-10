import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  constructor( public Auth: AuthService) { }

  ngOnInit(): void {
  }
  out(){

    this.Auth.logout;
    console.log("false");
  }
}
