import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loader = true;
  public datos: any;
  public menu:any;
  menuInterno:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService, private router:Router) { }

  ngOnInit(): void {
    this.datosMenu();
    this.urlimage = environment.urlImage;
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


}
