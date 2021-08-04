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
  user:any;
  rutaMenu:any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private services:ServicesProlongarService,private authservices:AuthservicesService) {}

  ngOnInit(): void {

    let url = this.router.url;
    this.rutaMenu = url.substr(1,4);
    
    this.menuSubHideShow=url.substr(1,4);
    this.moduleId=url.substr(8,1);

    this.services.dataModule(this.moduleId).subscribe(data => {
      this.datos=data;
      this.dataMenu = this.datos.sub_module_pages;
      this.menuTitle=this.datos.module_page;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {

      this.infoUser();

      let url = this.router.url;
      this.rutaMenu = url.substr(1,4);
      
      this.menuSubHideShow=url.substr(1,4);
      this.moduleId=url.substr(8,1);

      this.services.dataModule(this.moduleId).subscribe(data => {
        this.datos=data;
        this.dataMenu = this.datos.sub_module_pages;
        this.menuTitle=this.datos.module_page;
      })
    });

    this.datosMenu();
    this.infoUser();
  }

  logout() {
    this.router.navigate(['home'])
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
    this.router.navigate(['modulo/',id])
  }

  redirecSbMenu(id: any){
    this.menuHideShow();
    this.router.navigate(['modulo/',this.moduleId,id])
  }

  infoUser() {
    let dataId={
      id : localStorage.getItem('id')
    }
    this.authservices.infoUser(dataId).subscribe(data=>{
      this.user = data;
    })
  }
}
