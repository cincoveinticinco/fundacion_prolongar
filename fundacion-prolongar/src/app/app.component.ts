import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { filter, pairwise, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from './services/google-analytics.service';

declare let gtag: Function
const has = Object.prototype.hasOwnProperty;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundacion-prolongar';
  tokenValidate: any;

  private destroy$ = new Subject<void>()

  constructor(private router: Router, private analytics: GoogleAnalyticsService) {

    router.events
      .pipe(filter(e => e instanceof RoutesRecognized))
      .pipe(pairwise())
      .subscribe((event: any[]) => {
        localStorage.setItem('lastView', event[0].urlAfterRedirects)
      })
  }

  ngOnInit() {

    timer(800)
      .pipe(
        filter(() => has.call(window, 'ga')),
        take(1),
        switchMap(() => {
          return this.router.events.pipe(
            filter((e) => e instanceof NavigationEnd),
            tap((e: any) => {
              this.analytics.logPageView(e.url)
            })
          )
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

  }

  ngOnDestroy(): void {
    this.destroy$.next()
  }
}
