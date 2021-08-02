import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tokenValidate:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.tokenValidate =localStorage.getItem('token');
    });
  }

}
