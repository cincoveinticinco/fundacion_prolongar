import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-a-quien-va-dirigida',
  templateUrl: './a-quien-va-dirigida.component.html',
  styleUrls: ['./a-quien-va-dirigida.component.scss']
})
export class AQuienVaDirigidaComponent implements OnInit {

  public datos:any;
  public aquien:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.datosAqvd();
  }

  datosAqvd(){
    this.services.infoHome().subscribe(data => {
      this.datos = data
      this.aquien = this.datos.menu_content[1];
    })
  }

}
