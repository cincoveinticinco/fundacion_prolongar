import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html',
  styleUrls: ['./principios.component.scss']
})
export class PrincipiosComponent implements OnInit {

  public datos:any;
  public principios:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.datosPrincipios();
  }

  datosPrincipios() {
    this.services.infoHomeData.subscribe(data => {
      if (data) {
        this.datos=data;
        this.principios = this.datos.menu_content[3];
      }

    })
  }

}
