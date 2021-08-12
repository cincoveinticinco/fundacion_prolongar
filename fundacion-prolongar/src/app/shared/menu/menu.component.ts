import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { OpenModuleMenuService } from 'src/app/services/open-module-menu.service';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private services: ServicesProlongarService, private authservices: AuthservicesService, private menuStatus: OpenModuleMenuService) {
  }



  ngOnInit(): void {

    let url = this.router.url;
    this.rutaMenu = url.substr(1,4);

    this.menuSubHideShow=url.substr(1,4);
    this.moduleId=url.substr(8,1);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {

      let url = this.router.url;
      this.rutaMenu = url.substr(1,4);

      this.menuSubHideShow=url.substr(1,4);
      this.moduleId=url.substr(8,1);

      this.datosModulo()
    });

    this.datosModulo()
    this.datosMenu();
    this.infoUser();

    this.menuStatus.changeMenu$.subscribe(status => {
      console.log(status)
      this.services.loadIngoDataModule = false;
      this.datosModulo()
      this.menu = status
    })

  }

  logout() {
    this.router.navigate(['home'])
    this.authservices.logout();
    window.location.reload()
  }

  menuHideShow() {
    this.menu =!this.menu;
  }

  datosModulo() {
    this.services.infoDataModule(this.moduleId).subscribe(data => {
      if (data) {
        this.datos=data;
        this.dataMenu = this.datos.sub_module_pages;
        this.menuTitle=this.datos.module_page;
      }
    });
  }

  datosMenu(){
    this.services.infoHomeData.subscribe((data: any) => {
      if (data) {
        this.datos=data;
        this.menuInterno = this.datos.module_page
      }

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
    this.authservices.infoUserData().subscribe((data:any) => {
      if (data && data.user) {
        this.user = data;
      }
    })
  }
}
