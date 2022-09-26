import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadService } from './load.service';
import { finalize } from 'rxjs/operators';



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loadService: LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.loadService.show();

      

    return next.handle(request).pipe(
            finalize(()=> this.loadService.hiden()));
  }
}
