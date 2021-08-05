import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpEvent,
		 HttpHandler,
		 HttpInterceptor,
		 HttpRequest,
		 HttpResponse,
		 HttpErrorResponse
} from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';


@Injectable()
export class HttpCatchErrors implements HttpInterceptor{

	constructor(private router: Router){}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if(event instanceof HttpResponse){
          if (event.body && event.body.msg) {
            if (event.body.msg == "Sesion inactiva") {
              this.router.navigate(['/'])
            }
					}
				}

				return event;
			}),

			catchError((error: HttpErrorResponse) => {
        this.router.navigate(['/login']);
				return throwError(error);
			})
		)
	}
}
