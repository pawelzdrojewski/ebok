import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-powiadomienia',
  templateUrl: './powiadomienia.component.html',
  styleUrls: ['./powiadomienia.component.scss']
})
export class PowiadomieniaComponent implements OnInit {

  dataSource: any;
  required: string = 'notifications';

  rows = new Array(100);

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.NotificationsyGet(this.required); 

  }
  NotificationsyGet(text: string){  
    this.httpService.getNotifications(text).subscribe(
      (response) => { 
       // this.dataSource = response; 
       console.log("Response: "+response);
      },
      (error) => { console.log(error); }
      );
  }

}
