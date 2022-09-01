import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public loader = true;
  public datos: any;
  public menu:any;
  menuInterno:any;
  urlimage: any;

  constructor(
    private services: ServicesProlongarService,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private title: Title) {
    this.title.setTitle(`${environment.titlePage} -  - Inicio garabatos`)
  }

  ngOnInit(): void {
    this.datosMenu();
    this.urlimage = environment.urlImage;
  }

  ngAfterViewInit(): void {
    let homeModule = sessionStorage.getItem('homeModulo');
    if (homeModule) {
      location.hash = '#separator';
      sessionStorage.removeItem('homeModulo');
    }
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.includes('a-quienva-dirigida')) window.scrollTo(0, 0);
      }
    })
  }

  datosMenu() {
    this.services.infoHomeData.subscribe(data => {
      if (data) {
        this.datos=data;
        this.menu = this.datos.menu_content;
        this.menuInterno = this.datos.module_page
        this.loader = false
      }

    })
  }

  redirecMenu(id: any){
    this.router.navigate(['modulo/',id])
  }

  getPositionBanner(index:any) {
    const esPar = index % 2 == 0;

    if (!esPar) {
      return 'half-wide';
    } else {
      if (index == this.menuInterno.length - 1) {
        return 'full-wide';
      }
    }

    return 'half-wide';
  }

  goToAnchor(anchor:string) {
    this.viewportScroller.scrollToAnchor(anchor)
  }


}
