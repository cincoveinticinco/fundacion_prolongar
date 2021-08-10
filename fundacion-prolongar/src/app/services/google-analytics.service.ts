import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

type Tracker = {
  send: (
    hitType: string,
    category: string,
    action: string,
    label?: string
  ) => void;
}

declare const gtag: {
  (...args: any[]): () => void;
  getAll: () => Tracker[]
};

//declare const gtag: Function

const has = Object.prototype.hasOwnProperty;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  // logCustomEvent(eventCategory: string, eventAction: string, eventLabel?: string) {
  //   gtag(() => {
  //     if (has.call(window, 'gtag')) {
  //       const tracker = gtag.getAll();
  //       if (tracker?.length > 0) {
  //         tracker[0]?.send('event', eventCategory, eventAction, eventLabel)
  //       }
  //     }
  //   })
  // }

  logPageView(url: string) {
    setTimeout(() => {
      gtag('config', environment.gaTrackingId, {'page_path': url});
    }, 1000)

  }

  constructor() { }
}
