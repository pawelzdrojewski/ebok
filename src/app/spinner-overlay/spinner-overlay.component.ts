import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoadService) { }

  ngOnInit(): void {
  }

}
