import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(private services:ServicesProlongarService,
    private title: Title) {
    this.title.setTitle(`${environment.titlePage} - ¿Para qué es?`)
  }

  ngOnInit(): void {
    this.urlimage = environment.urlImage;
    this.datosParaQ();
  }

  datosParaQ(){
    this.services.infoHomeData.subscribe(data => {
      if (data) {
        this.datos=data;
        this.paraque = this.datos.menu_content[0];
      }

    })
  }

}
