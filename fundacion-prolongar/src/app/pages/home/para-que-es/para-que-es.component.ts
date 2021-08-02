import { Component, OnInit } from '@angular/core';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-para-que-es',
  templateUrl: './para-que-es.component.html',
  styleUrls: ['./para-que-es.component.scss']
})
export class ParaQueEsComponent implements OnInit {

  public datos:any;
  public paraque:any;
  urlimage: any;

  constructor(private services:ServicesProlongarService) { }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.datosParaQ();
  }

  datosParaQ(){
    this.services.infoHome().subscribe(data => {
      this.datos=data;
      this.paraque = this.datos.menu_content[0];
    })
  }

}
