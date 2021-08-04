import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundacion-prolongar';
  tokenValidate: any;

  constructor(private router: Router) {

    router.events
      .pipe(filter(e => e instanceof RoutesRecognized))
      .pipe(pairwise())
      .subscribe((event: any[]) => {
        localStorage.setItem('lastView', event[0].urlAfterRedirects)
      })
  }

  ngOnInit() {


  }
}
