import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-bok';

  constructor(private loadService: LoadService) { }

  _loading = this.loadService._loading;

}
