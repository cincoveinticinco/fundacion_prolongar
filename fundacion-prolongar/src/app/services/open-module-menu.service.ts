import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenModuleMenuService {

  private menu_status = new Subject<boolean>();
	changeMenu$ = this.menu_status.asObservable();

	constructor() { }

  changeMenu(status: boolean) {
    if (status) {
      window.scroll(0,0);
    }

		this.menu_status.next(status);
	}
}
