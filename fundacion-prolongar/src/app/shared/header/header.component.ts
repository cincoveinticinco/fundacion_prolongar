import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tokenValidate:any;
  rutaMenu:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let url = this.router.url;
    this.rutaMenu = url.substr(1,4);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      let url = this.router.url;
      this.rutaMenu = url.substr(1,4);
    });

    this.router.events.subscribe((val) => {
      this.tokenValidate =localStorage.getItem('token');
    });
  }

}
