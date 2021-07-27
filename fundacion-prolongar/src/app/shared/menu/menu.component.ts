import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  moduleId:any;
  datos:any;
  dataMenu:any;
  menu:boolean=false;
  menuTitle:any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private services:ServicesProlongarService,private authservices:AuthservicesService) { }

  ngOnInit(): void {
    if (location.href.indexOf('corporalidad')>-1) {
      this.moduleId=1;
      console.log('en corporalidad');
    }
    if (location.href.indexOf('prejuicios')>-1) {
      this.moduleId=2;
      console.log('en prejuicios');
    }
    if (location.href.indexOf('emociones')>-1) {
      this.moduleId=3;
      console.log('en emociones');
    }
    this.services.dataModule(this.moduleId).subscribe(data => {
      this.datos=data;
      this.dataMenu = this.datos.sub_module_pages;
      this.menuTitle=this.datos.module_page;
      console.log(data);
    })
  }

  logout() {
    this.router.navigate(['home/homes'])
    this.authservices.logout();
  }

  menuHideShow() {
    this.menu =!this.menu;
  }
}
