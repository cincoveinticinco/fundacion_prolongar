import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  menuInterno: any;
  menuSubHideShow:any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private services:ServicesProlongarService,private authservices:AuthservicesService) {}

  ngOnInit(): void {

    let url = this.router.url;

    this.menuSubHideShow=url.substr(1,4);

    this.moduleId=url.substr(1,1);

    this.services.dataModule(this.moduleId).subscribe(data => {
      this.datos=data;
      this.dataMenu = this.datos.sub_module_pages;
      this.menuTitle=this.datos.module_page;
      console.log(data);
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      let url = this.router.url;
      this.menuSubHideShow=url.substr(1,4);
      this.moduleId=url.substr(1,1);
      this.services.dataModule(this.moduleId).subscribe(data => {
        this.datos=data;
        this.dataMenu = this.datos.sub_module_pages;
        this.menuTitle=this.datos.module_page;
        console.log(data);
      })
    });

    this.datosMenu();
  }

  logout() {
    this.router.navigate(['home/homes'])
    this.authservices.logout();
  }

  menuHideShow() {
    this.menu =!this.menu;
  }

  datosMenu(){
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.menuInterno = this.datos.module_page
    })
  }

  redirecMenu(id: any){
    this.router.navigate([id])
  }

  redirecSbMenu(id: any){
    this.router.navigate([this.moduleId,id])
  }
}
