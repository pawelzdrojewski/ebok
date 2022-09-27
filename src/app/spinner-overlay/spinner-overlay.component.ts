import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {

 // _loading: Subject<boolean> = this.loadService.isLoading;
  // _loading = this.loadService._loading;

  // constructor(private loadService: LoadService) { }

 // loading$ = this.loader.loading$;

  constructor() { }

  ngOnInit(): void {
  }

}
