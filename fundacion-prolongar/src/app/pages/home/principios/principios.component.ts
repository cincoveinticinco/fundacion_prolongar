import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html',
  styleUrls: ['./principios.component.scss']
})
export class PrincipiosComponent implements OnInit {

  public datos:any;
  public principios:any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.datosPrincipios();
  }

  datosPrincipios(){
    this.services.infoHome().subscribe(data=>{
      this.datos=data;
      this.principios = this.datos.menu_content[3];
      console.log(this.principios);
    })
  }

}
