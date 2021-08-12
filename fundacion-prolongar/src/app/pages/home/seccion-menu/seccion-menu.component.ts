import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import { environment } from 'src/environments/environment';

const enum PAGINAS {
  ParaQueEs = 'para-que-es',
  AQuienVaDirigida = 'a-quienva-dirigida',
  Principios = 'principios',
  KAS = 'kas'
}


@Component({
  selector: 'app-seccion-menu',
  templateUrl: './seccion-menu.component.html',
  styleUrls: ['./seccion-menu.component.scss']
})
export class SeccionMenuComponent implements OnInit {

  public datos:any;
  public seccionContent:any;
  urlimage: any;
  seccionId: any = null

  constructor(
    private route: ActivatedRoute,
    private services: ServicesProlongarService,
    private title: Title) {
      this.title.setTitle(`${environment.titlePage} - KAS`)
    }

    ngOnInit(): void {
      this.urlimage = environment.urlImage;

      this.route.params.subscribe(params => {
        this.seccionContent = null
        this.seccionId = params.seccionId
        this.datosSeccion();
      })

    }

    datosSeccion() {
      let indexPagina = 0;

      this.services.infoHomeData.subscribe(data => {
        if (data) {
          this.datos = data

          switch (this.seccionId) {
            case PAGINAS.ParaQueEs:
            indexPagina = 0
            break;
            case PAGINAS.AQuienVaDirigida:
            indexPagina = 1
            break;
            case PAGINAS.Principios:
            indexPagina = 3
            break;
            case PAGINAS.KAS:
            indexPagina = 4
            break;
          }

          this.seccionContent = this.datos.menu_content[indexPagina];
        }

      })
    }
  }
