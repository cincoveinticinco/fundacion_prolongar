import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesProlongarService } from 'src/app/services/services-prolongar.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-sub-module',
  templateUrl: './sub-module.component.html',
  styleUrls: ['./sub-module.component.scss']
})
export class SubModuleComponent implements OnInit {

  moduleId:any;
  datos:any;
  previus:any;
  next:any;
  completado:boolean=false;
  verDespues:boolean=false;

  constructor(private router: Router, private services:ServicesProlongarService,private rutaActiva: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(data=>{
      this.moduleId=data;
      this.services.dataSubModule(this.moduleId.params['idsubmodule']).subscribe(data => {
        this.datos=data;
        this.next = this.datos.next_submodule;
        this.previus = this.datos.prev_submodule
        
        console.log(data);
      });
    });
  }

  compled() {
    this.completado =!this.completado;
    this.verDespues =!this.completado;
  }

  verdespues(){
    this.verDespues =!this.verDespues;
    this.completado =!this.verDespues;
  }

  url(url:string) {
    /* extraer url y cambiar src="https://www.youtube.com/embed/OAXGl12ZspI"*/
    let urlgood = url
    let url2 = urlgood.split('');
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
